import React from 'react'
import { Container, TextWrapper } from './styles'

const Music = () => {
  return (
    <Container>
      <img alt="foto_do_back" src={"#"} />
      <TextWrapper>
        <h2>Nome</h2>
        <h2>Gênero</h2>
        <p>Descrição, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </TextWrapper>
    </Container>
  )
}

export default Music