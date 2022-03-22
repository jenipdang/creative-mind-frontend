import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [message, setMessage] = useState(null)

	return (
		<DataContext.Provider
			value={{
				user,
				setUser,
				message,
				setMessage
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(DataContext);
};

export { DataProvider, DataContext };
