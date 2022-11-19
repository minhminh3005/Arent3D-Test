import React, { createContext, ReactNode, useContext, useState } from 'react'

interface IAuth {
    loggedIn: boolean,
    logHandler: () => void
}

const initialAuth: IAuth = {
    loggedIn: false,
    logHandler: () => {}
}

export const AuthContext = createContext<IAuth>(initialAuth)

type Props = {
    children: ReactNode
  }

export const AuthProvider = ({children}: Props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const logHandler = () => setLoggedIn(!loggedIn)
  return (
   <AuthContext.Provider value={{loggedIn, logHandler}}>
       {children}
   </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

