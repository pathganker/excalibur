/**   */
package org.saber.excalibur.pojo;

import java.io.Serializable;

import org.saber.excalibur.pojo.api.ApiCodeEnum;

/**   
 * 类名称:  Result   
 * 描述: 接口返回结果   
 * 创建人: lijunliang
 * 创建时间:   2019年1月21日 下午12:59:32   
 */
public class Result implements Serializable{
	/** */
	private static final long serialVersionUID = 7657198543707480905L;
	/** 返回码*/
	private String code;
	/** 描述 */
	private String message;
	/** 数据 */
	private Object data;
	
	public String getCode() {
		return code;
	}
	public void setCode(ApiCodeEnum code) {
		this.code = code.getErrorCode();
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
}
