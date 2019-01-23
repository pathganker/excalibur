/**   */
package org.saber.excalibur.service.api.impl;

import javax.annotation.Resource;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.saber.excalibur.exception.api.TokenException;
import org.saber.excalibur.pojo.api.ApiCodeEnum;
import org.saber.excalibur.service.api.ITokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;


/**   
 * 类名称:  TokenServiceImpl   
 * 描述: token服务   
 * 创建人: lijunliang
 * 创建时间:   2019年1月21日 下午1:09:05   
 */
@Service
public class TokenServiceImpl implements ITokenService{
	
	private final static Logger LOGGER = LoggerFactory.getLogger(TokenServiceImpl.class);
	
	private final static String SUREAL_API_TOKEN_KEY_PREFIX ="sureal_api_token_uid_";
	
	/** token的有效期24小时*/
	private final static Integer SUREAL_API_TOKEN_ACTIVE_SECONED = 24 * 60 * 60;
	
	/** redis持久化服务*/
	@Resource(name = "redisDB")
	private JedisPool redisDB;
	/** (non-Javadoc)
	 * @throws TokenException 
	 * @see org.saber.excalibur.service.api.ITokenService#checkToken(java.lang.String, java.lang.String)
	 */
	@Override
	public boolean checkToken(String diviceId, String token) throws TokenException {
		if (StringUtils.isNotBlank(diviceId) && StringUtils.isNotBlank(token)) {
			Jedis jedis = null;
			String tk="";
			try {
				jedis = redisDB.getResource(); //redis链接资源
				tk = jedis.get(SUREAL_API_TOKEN_KEY_PREFIX + token); //获取保存的token
				LOGGER.debug("checkToken start:{},diviceId:{}", tk, diviceId);				
			}catch (Exception e) {
				LOGGER.error("redis访问异常{}", token);
				throw new TokenException(ApiCodeEnum.SERVICE_WRONG);
			} finally {
				if(null != jedis){
					jedis.close();
				}
			}
			if(StringUtils.isNotBlank(tk)){
				tk=tk.split("&")[0]; //获取返回的结果中的DIVICEID
			}
			if(StringUtils.isNotBlank(tk)){					
				if (tk.trim().equals(diviceId.trim())) { //TOKEN和redis中的一致则返回存在
					jedis.expire(SUREAL_API_TOKEN_KEY_PREFIX + token, SUREAL_API_TOKEN_ACTIVE_SECONED);
					LOGGER.debug("checkToken end:{},diviceId:{}", tk, diviceId);	
					return true;
				} else {
					LOGGER.error("token失效参数 设备id：{};输入token:{}", diviceId, token);
					throw new TokenException(ApiCodeEnum.CHANGE_DEVICE); //TOKEN超时
				}
			}else{
				LOGGER.warn("token失效参数 设备id：{};输入token:{}", diviceId, token);
				throw new TokenException(ApiCodeEnum.TOKEN_TIME_OUT); //TOKEN超时
			}
		} else if (StringUtils.isBlank(token)) {
			LOGGER.warn("token失效参数 设备id：{};输入token:{}", diviceId, token);
			throw new TokenException(ApiCodeEnum.TOKEN_LOST); //TOKEN丢失
		} else {
			LOGGER.warn("token失效参数 设备id：{};输入token:{}", diviceId, token);
			throw new TokenException(ApiCodeEnum.ARGS_WRONG); //参数异常
		}
	}
	/** (non-Javadoc)
	 * @see org.saber.excalibur.service.api.ITokenService#insertToken(java.lang.String, java.lang.String)
	 */
	@Override
	public String insertToken(String diviceId, String userId)
			throws TokenException {
		if (StringUtils.isNotBlank(diviceId) && userId !=null && !userId.equals("")) {
			Jedis jedis = null;
			try {
				jedis = redisDB.getResource();
				String token = RandomStringUtils.random(32, diviceId + System.currentTimeMillis() + ""); //生成token
				String value=diviceId+"&"+userId;
				jedis.set(SUREAL_API_TOKEN_KEY_PREFIX + token, value); //保存token
				jedis.expire(SUREAL_API_TOKEN_KEY_PREFIX + token, SUREAL_API_TOKEN_ACTIVE_SECONED); //设置token的有效时间
				return token;
			} catch (Exception e) {
				LOGGER.error("redis访问异常{}{}", e, diviceId);
				throw new TokenException(ApiCodeEnum.SERVICE_WRONG); //发生异常返回异常信息
			} finally {
				if(null != jedis){
					jedis.close();
				}
			}
		} else {
			if(StringUtils.isBlank(diviceId)){
				throw new TokenException(ApiCodeEnum.DEVICE_ID_NULL); //设备id不存在
			}else{
				throw new TokenException(ApiCodeEnum.USER_ID_ERROR); //用户id错误
			}
		}
	}
	/** (non-Javadoc)
	 * @see org.saber.excalibur.service.api.ITokenService#requestUserIdByToken(java.lang.String)
	 */
	@Override
	public String requestUserIdByToken(String token) throws TokenException {
		if (StringUtils.isNotBlank(token)) {
			Jedis jedis = null;
			try {
				jedis = redisDB.getResource(); //redis链接资源
				String tk = jedis.get(SUREAL_API_TOKEN_KEY_PREFIX + token); //获取保存的token
				if (StringUtils.isNotBlank(tk)&&tk.contains("&") ) { //TOKEN和redis中的一致则返回存在
					jedis.expire(SUREAL_API_TOKEN_KEY_PREFIX + token, SUREAL_API_TOKEN_ACTIVE_SECONED);
					return tk.split("&")[1];
				} else {
					LOGGER.error("获取token对应的用户信息异常token:{}", token);
					throw new TokenException(ApiCodeEnum.TOKEN_TIME_OUT); //TOKEN超时
				}
			} catch (Exception e) {
				LOGGER.error("获取token对应的用户信息异常token:{}{}", e, token);
				throw new TokenException(ApiCodeEnum.SERVICE_WRONG);
			} finally {
				if(null != jedis){
					jedis.close();
				}
			}
		}
		return null;
	}
	/** (non-Javadoc)
	 * @see org.saber.excalibur.service.api.ITokenService#deleteToken(java.lang.String)
	 */
	@Override
	public boolean deleteToken(String token) throws TokenException {
		if (StringUtils.isNotBlank(token)){
			Jedis jedis = null;
			try {
				jedis = redisDB.getResource();
				String tk = jedis.get(SUREAL_API_TOKEN_KEY_PREFIX + token);
				if(StringUtils.isNotBlank(tk)){
					jedis.del(SUREAL_API_TOKEN_KEY_PREFIX + token);
				}else{
					LOGGER.error("获取token对应的用户信息异常token:{}", token);
					throw new TokenException(ApiCodeEnum.TOKEN_TIME_OUT); //TOKEN超时
				}
			}catch (Exception e) {
				LOGGER.error("获取token对应的用户信息异常token:{}{}", e, token);
				throw new TokenException(ApiCodeEnum.SERVICE_WRONG);
			}finally{
				if(null != jedis){
					jedis.close();
				}
			}
		}
		return true;
	}

}
