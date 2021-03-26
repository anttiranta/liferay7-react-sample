package liferay7.react.sample.portlet.action;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.liferay.portal.kernel.portlet.JSONPortletResponseUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.BaseMVCResourceCommand;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.util.ParamUtil;
import liferay7.react.sample.constants.Liferay7ReactSamplePortletKeys;
import org.osgi.service.component.annotations.Component;

import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + Liferay7ReactSamplePortletKeys.Liferay7ReactSample,
                "mvc.command.name=" + Liferay7ReactSamplePortletKeys.RESOURCE_CMD_GET_TIME
        },
        service = MVCResourceCommand.class
)
public class GetTimeMVCResourceCommand extends BaseMVCResourceCommand {

    @Override
    protected void doServeResource(
            ResourceRequest resourceRequest,
            ResourceResponse resourceResponse
    ) throws Exception {
        String messageFromFrontend = ParamUtil.getString(resourceRequest, "message");

        Map<String, String> result = new HashMap<>();
        result.put("time", new Date().toString());
        result.put("message", messageFromFrontend);

        Gson gson = new GsonBuilder().create();
        JSONPortletResponseUtil.writeJSON(resourceRequest, resourceResponse, gson.toJson(result));
    }
}

