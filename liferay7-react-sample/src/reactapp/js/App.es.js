import React from 'react';
import {AppContextProvider} from './AppContext.es';
import LocaleProvider from "./components/LocaleProvider.es";

import FrontPage from './pages/FrontPage.es';

const App = (props) => {
    return (
        <AppContextProvider {...props}>
            <LocaleProvider>
                <FrontPage />
            </LocaleProvider>
        </AppContextProvider>
    );
};

export default App;
