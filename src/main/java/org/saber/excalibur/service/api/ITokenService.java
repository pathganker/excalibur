/**   */
package org.saber.excalibur.service.api;

import org.saber.excalibur.exception.api.TokenException;

/**   
 * 类名称:  ITokenService   
 * 描述: token服务接口   
 * 创建人: lijunliang
 * 创建时间:   2019年1月21日 下午1:04:15   
 */
public interface ITokenService {

	/**   
	 * 方法名:  checkToken  
	 * 描述:    验证token
	 * 创建人：	lijunliang
	 * 创建时间:  2019年1月21日下午1:04:24
	 * 修改时间:    
	 * 参数:  @param diviceId
	 * 参数:  @param token
	 * 参数:  @return  
	 * 返回类型  boolean 
	 */
	boolean checkToken(String diviceId, String token)  throws TokenException;
	/**
	 * 
	 * 方法名:  insertToken  
	 * 描述:    生成token
	 * 创建人：	lijunliang
	 * 创建时间:  2019年1月21日下午1:33:34
	 * 修改时间:    
	 * 参数:  @param diviceId
	 * 参数:  @param userId
	 * 参数:  @return
	 * 参数:  @throws TokenException  
	 * 返回类型  String
	 */
	public String insertToken(String diviceId, String userId)throws TokenException;
	/**
	 * 
	 * 方法名:  requestUserIdByToken  
	 * 描述:    请求token
	 * 创建人：	lijunliang
	 * 创建时间:  2019年1月21日下午1:33:48
	 * 修改时间:    
	 * 参数:  @param token
	 * 参数:  @return
	 * 参数:  @throws TokenException  
	 * 返回类型  String
	 */
	public String requestUserIdByToken(String token) throws TokenException;
	/**
	 * 
	 * 方法名:  deleteToken  
	 * 描述:    删除token
	 * 创建人：	lijunliang
	 * 创建时间:  2019年1月21日下午7:54:50
	 * 修改时间:    
	 * 参数:  @param diviceId
	 * 参数:  @param userId
	 * 参数:  @return
	 * 参数:  @throws TokenException  
	 * 返回类型  boolean
	 */
	boolean deleteToken(String token)throws TokenException;

}
