import {useState, useContext} from 'react';

import {AppContext} from "../AppContext.es";
import {useFetch} from '../hooks/useFetch.es';
import createResourceURL from "../utils/portletUrl/createResourceUrl.es";
import {
    RESOURCE_CMD_GET_TIME,
    LIFERAY7_REACT_SAMPLE_URL_PARAMS,
    ENDPOINT_URL
} from "../constants.es";

const useFrontPage = () => {
    const [time, setTime] = useState(null);
    const {portletId} = useContext(AppContext);

    const params = {
        p_p_id: portletId,
        p_p_resource_id: RESOURCE_CMD_GET_TIME,
        message: "test message",
        ...LIFERAY7_REACT_SAMPLE_URL_PARAMS
    };
    const link = createResourceURL(ENDPOINT_URL, params);

    const {fetchData} = useFetch({url: link.toString()});

    const refreshTime = () => {
        fetchData().then(({time}) => {
            setTime(time)
        }).catch(error => {
            console.error(error)
        })
    };

    const state = {time};
    const api = {refreshTime, setTime};

    return [state, api];
};

export {useFrontPage};
