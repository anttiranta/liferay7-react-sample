import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { toReactIntl } from '../utils/formatLocale.es';

// Add translation imports here for other languages
import messagesEn from "../../i18n/en_US.json";
import messagesFi from "../../i18n/fi_FI.json";

const LocaleProvider = props => {
    const [messages, setMessages] = useState(null);

    const language = toReactIntl(Liferay.ThemeDisplay.getLanguageId());

    useEffect(() => {
        if (language) {
            // Add translations to map for other languages
            const map = {
                'en-US': messagesEn,
                'fi-FI': messagesFi,
            };

            setMessages(map[language]);
        }
    }, [setMessages, language]);

    const onIntlError = error => {
        if (messages) {
            if (error.code === 'MISSING_TRANSLATION') {
                console.warn('Missing translation', error.message);
                return;
            }
            throw error;
        }
    };

    return (
        <IntlProvider
            key={language}
            {...props}
            defaultLocale="en-US"
            locale={language}
            messages={messages}
            onError={onIntlError}
        />
    );
};

export default LocaleProvider;