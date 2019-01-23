/**   */
package org.saber.excalibur.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

/**
 * 类名称: CORSFilter 
 * 描述: 跨域访问拦截 
 * 创建人: lijunliang 
 * 创建时间: 2019年1月21日 下午3:10:51
 */
public class CORSFilter implements Filter {

	/**
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#destroy()
	 */
	@Override
	public void destroy() {
	}

	/**
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#doFilter(javax.servlet.ServletRequest,
	 *      javax.servlet.ServletResponse, javax.servlet.FilterChain)
	 */
	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		//HttpServletRequest httpReq = (HttpServletRequest) request;
		HttpServletResponse httpResp = (HttpServletResponse) response;
		httpResp.addHeader("Access-Control-Allow-Origin", "*");
		httpResp.addHeader("Access-Control-Allow-Methods",
				"GET, POST, PUT, OPTIONS, DELETE");
		httpResp.addHeader("Access-Control-Allow-Headers", "Content-Type, Auth-Token, Auth-Device");
//		httpResp.setHeader("Access-Control-Allow-Credentials", "true");
//		if (httpReq.getMethod().equalsIgnoreCase("OPTIONS")) {
//			httpResp.setHeader("Access-Control-Allow-Headers",
//					httpReq.getHeader("Access-Control-Request-Headers"));
//		}
		chain.doFilter(request, response);
	}

	/**
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
	 */
	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

}
