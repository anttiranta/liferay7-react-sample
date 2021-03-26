import React from 'react';
import {useIntl, FormattedMessage} from 'react-intl';

import {useFrontPage} from "../talons/useFrontPage.es";

const FrontPage = () => {
    const {formatMessage} = useIntl();
    const [state, api] = useFrontPage();

    const time = state.time || formatMessage({id: 'general.unknown', defaultMessage: 'unknown'})
    const {refreshTime} = api;

    return (
        <div className="root">
            <div className="timeContainer">
                <FormattedMessage
                    id={'frontpage.greeting'}
                    defaultMessage={'Liferay React Sample! The time is {time}'}
                    values={{time: time}}
                />
            </div>
            <div className="buttonContainer">
                <button onClick={refreshTime}>
                    <FormattedMessage
                        id={'frontpage.refresh-time-btn-text'}
                        defaultMessage={'Refresh time from server'}
                    />
                </button>
            </div>
        </div>
    );
};

export default FrontPage;
