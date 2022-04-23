import React from 'react'
import { Container, TextWrapper, OptionsWrapper, Option } from './styles'

const BigMusic = () => {
  return (
    <Container>
      <img alt="foto_do_back" src={"#"} />
      <TextWrapper>
        <h2>Nome</h2>
        <h2>Gênero</h2>
        <p>Descrição, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </TextWrapper>
      <OptionsWrapper>
        <Option>
          <h4>Avaliação: {"4.2"}</h4>
          <form>
            <input type="text" placeholder="nota"/>
            <input type="submit" value="Enviar"/>
          </form>
        </Option>
        <Option>
          <h4>Salvar:</h4>
          <svg width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.25H27.9731" stroke="#ECA820"/>
            <path d="M0 10H18.2433" stroke="#ECA820"/>
            <path d="M0 18.75H18.2433" stroke="#ECA820"/>
            <path d="M35.27 0V20" stroke="#ECA820"/>
            <path d="M25.5405 10L45.0001 10" stroke="#ECA820"/>
          </svg>
        </Option>
        <Option>
          <h5>Usuários que salvaram</h5>
        </Option>
      </OptionsWrapper>
    </Container>
  )
}

export default BigMusic