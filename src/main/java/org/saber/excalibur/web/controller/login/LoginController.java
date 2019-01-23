/**   */
package org.saber.excalibur.web.controller.login;


import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.saber.excalibur.exception.api.TokenException;
import org.saber.excalibur.pojo.Result;
import org.saber.excalibur.pojo.api.ApiCodeEnum;
import org.saber.excalibur.service.api.ITokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**   
 * 类名称:  LoginController   
 * 描述: 登录控制器   
 * 创建人: lijunliang
 * 创建时间:   2019年1月21日 上午11:00:52   
 */
@RestController
@RequestMapping("login")
public class LoginController {
	
	/** TOKEN标记名*/
	private static final String PARAMTER_TOKEN_NAME = "Auth-token";
	
	/** DIVICEID标记名*/
	private static final String PARAMTER_DIVICEID_NAME = "Auth-Device";
	
	private final static Logger LOGGER = LoggerFactory.getLogger(LoginController.class); 
	@Autowired
	private ITokenService tokenService;
	/**
	 * 
	 * 方法名:  login  
	 * 描述:    登入
	 * 创建人：	lijunliang
	 * 创建时间:  2019年1月21日下午8:04:12
	 * 修改时间:    
	 * 参数:  @param deviceId
	 * 参数:  @param username
	 * 参数:  @param password
	 * 参数:  @return  
	 * 返回类型  Result
	 */
	@RequestMapping(value="/signin")
	public Result login(HttpServletRequest request, String username, String password){
		Result rs = new Result();
		String deviceId = request.getHeader(PARAMTER_DIVICEID_NAME);
		if("admin@wz.com".equals(username) && "123456".equals(password)){
			try {
				String temp = tokenService.insertToken(deviceId, username);
				Map<String,String> token = new HashMap<String, String>();
				token.put("token", temp);
				rs.setData(token);
				rs.setCode(ApiCodeEnum.SUCCESS);
				LOGGER.info("用户  {} 登录系统",username);
				return rs;
			} catch (TokenException e) {
				rs.setCode(ApiCodeEnum.SERVICE_WRONG);
				LOGGER.error("创建token错误:{}", e);
				return rs;
			}
		}
		rs.setCode(ApiCodeEnum.USER_NAME_OR_PWD);
		return rs;
	}
	/**
	 * 
	 * 方法名:  logout  
	 * 描述:    登出
	 * 创建人：	lijunliang
	 * 创建时间:  2019年1月21日下午8:04:10
	 * 修改时间:    
	 * 参数:  @param token
	 * 参数:  @return  
	 * 返回类型  Result
	 */
	@RequestMapping(value="/signout")
	public Result logout(HttpServletRequest request){
		Result rs = new Result();
		String token = request.getHeader(PARAMTER_TOKEN_NAME);
		try {
			LOGGER.info("用户 {} 登出系统", tokenService.requestUserIdByToken(token));
			this.tokenService.deleteToken(token);
		} catch (TokenException e) {
			LOGGER.error("删除token错误:{}", e);
		}
		rs.setCode(ApiCodeEnum.SUCCESS);
		return rs;
	}
	
	
}
