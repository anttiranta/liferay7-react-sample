import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.es';
import "../css/index.scss"

// noinspection JSUnresolvedVariable
const portletProps = reactSamplePortletProps;

ReactDOM.render(
	<App {...portletProps} />,
	document.getElementById("_" + portletProps.portletId + "_-root")
);