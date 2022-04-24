import React, { useState } from 'react'
import { Container } from './styles'
import { useHistory } from "react-router";
import { useUserContext } from '../../Context/userContext';

const FormLogin = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserContext();

  const loginUser = (event) => {
    event.preventDefault()
    login(email ,password)
  }

  return (
    <Container>
      <form onSubmit={(e) => loginUser(e)} >

        <h2>Logar-se</h2>

        <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />

        <input 
          type="password" 
          placeholder="Senha"
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
        />
                    
        <input type="submit" value="Entrar"/>
        <input type="button" value="Entrar sem logar" onClick={()=>history.push("/home")} />
      </form>
    </Container>
  )
}

export default FormLogin