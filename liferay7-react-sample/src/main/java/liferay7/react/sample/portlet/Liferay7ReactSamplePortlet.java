package liferay7.react.sample.portlet;

import liferay7.react.sample.constants.Liferay7ReactSamplePortletKeys;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import java.io.IOException;
import javax.portlet.Portlet;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.osgi.service.component.annotations.Component;

@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.instanceable=false", // this needs to be false!
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + Liferay7ReactSamplePortletKeys.Liferay7ReactSample,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=guest,power-user,user"
	},
	service = Portlet.class
)
public class Liferay7ReactSamplePortlet extends MVCPortlet {

	@Override
	public void doView(
			RenderRequest renderRequest, RenderResponse renderResponse)
		throws IOException, PortletException {

		// Set data needed for frontend here, so we can use it in portlet props
		renderRequest.setAttribute("portletId", Liferay7ReactSamplePortletKeys.Liferay7ReactSample);

		super.doView(renderRequest, renderResponse);
	}
}