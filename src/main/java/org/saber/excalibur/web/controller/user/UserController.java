/**   */
package org.saber.excalibur.web.controller.user;

import org.saber.excalibur.pojo.Result;
import org.saber.excalibur.pojo.api.ApiCodeEnum;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;


/**   
 * 类名称:  UserControlelr   
 * 描述:TODO   
 * 创建人: lijunliang
 * 创建时间:   2019年1月21日 下午2:05:13   
 */
@RequestMapping("user")
@RestController
public class UserController {
	private final static Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	@RequestMapping(value="info")
	public Result userInfo(){
		Result rs = new Result();
		rs.setCode(ApiCodeEnum.SUCCESS);
		LOGGER.info("发送用户信息：{}",JSON.toJSONString(rs));
		return rs;
	}
}
