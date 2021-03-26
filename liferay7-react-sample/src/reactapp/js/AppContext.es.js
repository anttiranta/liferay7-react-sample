import React, {useState} from 'react';

// noinspection JSCheckFunctionSignatures
const AppContext = React.createContext();

const AppContextProvider = ({children, ...props}) => {
	const state = {
		...props
	};

	return (
		<AppContext.Provider value={state}>
			{children}
		</AppContext.Provider>
	);
};

export {AppContext, AppContextProvider};