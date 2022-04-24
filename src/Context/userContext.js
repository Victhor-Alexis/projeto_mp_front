import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useHistory } from "react-router";
import Cookie from "js-cookie";

const UserContext = createContext({})

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(undefined)
  const history = useHistory();

  useEffect(() => {
    const retrievedUser = Cookie.get('user')
    if (retrievedUser) {
      setUser(JSON.parse(retrievedUser))
      
      if(JSON.parse(retrievedUser) !== null) {
        api.defaults.headers.common['X-User-Token'] = JSON.parse(retrievedUser).authentication_token
        api.defaults.headers.common['X-User-Email'] = JSON.parse(retrievedUser).email 
      }
    }
  }, [])
  
  const login = async (email, password) => {
    const response = await api.post('/users/login', {
      email,
      password
    })

    if (response) {
      console.log(response)
      setUser(response.data)
      Cookie.set("user", JSON.stringify(response.data))
      api.defaults.headers.common['X-User-Token'] = response.data.authentication_token
      api.defaults.headers.common['X-User-Email'] = response.data.email
      alert("Login efetuado!")
      history.push("/home")
    } else {
      alert("Credenciais inválidas")
    }
  }

  return (
    <UserContext.Provider value={{ login, user }}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  const context = useContext(UserContext)
  return context;
}

export { UserProvider, useUserContext }