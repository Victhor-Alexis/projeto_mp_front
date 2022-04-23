import React from 'react'
import { Container } from './styles'
import { useHistory } from "react-router";

const FormLogin = () => {
  const history = useHistory()

  return (
    <Container>
      <form>

        <h2>Logar-se</h2>

        <input 
          type="email" 
          placeholder="E-mail"
          //value={email}
          //onChange={(event) => {setEmail(event.target.value)}}
        />

        <input 
          type="password" 
          placeholder="Senha"
          //value={password}
          //onChange={(event) => {setEmail(event.target.value)}}
        />
                    
        <input type="submit" value="Entrar"/>
        <input type="button" value="Entrar sem logar" onClick={()=>history.push("/home")} />
      </form>
    </Container>
  )
}

export default FormLogin