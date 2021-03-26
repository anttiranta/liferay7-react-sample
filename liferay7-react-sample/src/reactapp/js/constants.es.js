export const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

export const DEFAULT_PORTLET_URL_PARAMS = {
    p_p_auth: Liferay.authToken
}

export const LIFERAY7_REACT_SAMPLE_URL_PARAMS = {
    locale: Liferay.ThemeDisplay.getLanguageId(),
    doAsGroupId: true,
    p_p_mode: 'view',
    p_p_state: 'normal'
};

export const ENDPOINT_URL = Liferay.ThemeDisplay.getLayoutURL();

export const RESOURCE_CMD_GET_TIME = "get-time";