/**   */
package org.saber.excalibur.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;

/**   
 * 类名称:  TokenFilter   
 * 描述: token过滤   
 * 创建人: lijunliang
 * 创建时间:   2019年1月22日 上午9:40:33   
 */
public class TokenFilter implements Filter{
	
	/** TOKEN标记名*/
	private static final String PARAMTER_TOKEN_NAME = "token";
	
	/** DIVICEID标记名*/
	private static final String PARAMTER_DIVICEID_NAME = "deviceId";

	/** (non-Javadoc)
	 * @see javax.servlet.Filter#destroy()
	 */
	@Override
	public void destroy() {
		
	}

	/** (non-Javadoc)
	 * @see javax.servlet.Filter#doFilter(javax.servlet.ServletRequest, javax.servlet.ServletResponse, javax.servlet.FilterChain)
	 */
	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest httpReq = (HttpServletRequest) request;
		HttpServletResponse httpResp = (HttpServletResponse) response;
		String token = httpReq.getParameter(PARAMTER_TOKEN_NAME);
		String diviceId=httpReq.getParameter(PARAMTER_DIVICEID_NAME);
		if (StringUtils.isBlank(token) || StringUtils.isBlank(diviceId)) {
			httpResp.sendRedirect("/index.html");
		}
		chain.doFilter(request, response);
		
		
	}

	/** (non-Javadoc)
	 * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
	 */
	@Override
	public void init(FilterConfig arg0) throws ServletException {
		
	}

}
