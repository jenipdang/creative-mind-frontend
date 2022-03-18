import React, { useContext, useState } from 'react'

const DataContext = React.createContext()

const DataProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <DataContext.Provider value={({user, setUser})}>
            {children}
        </DataContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(DataContext)
}

export {DataProvider, DataContext}