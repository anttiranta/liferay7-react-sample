import axios from 'axios';
import qs from 'qs';

import {
    DEFAULT_HEADERS,
    DEFAULT_PORTLET_URL_PARAMS
} from "../constants.es";

axios.defaults.headers.common = DEFAULT_HEADERS;
axios.defaults.params = DEFAULT_PORTLET_URL_PARAMS;

axios.defaults.paramsSerializer = (params) =>
    qs.stringify(params, {arrayFormat: 'repeat'});

const client = axios.create();

export default client;
