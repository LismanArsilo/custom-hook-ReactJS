import React, { useState, useContext, createContext } from 'react'
import Navbar from './Navbar'
import Page from './Page'

export const LoginContext = createContext()

const Context = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  const handleLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  }

  return (
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      <Navbar />
      <Page />
    </LoginContext.Provider>
  )
}

export default Context