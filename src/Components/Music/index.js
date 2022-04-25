import React from 'react'
import { Container, TextWrapper } from './styles'

const Music = ({music, onClick}) => {
  return (
    <Container onClick={onClick}>
      <img alt="foto_do_back" src={`http://localhost:3000${music.photo_url}`} />
      <TextWrapper>
        <h2>{music.title}</h2>
        <h2>{music.genre}</h2>
        <p>{music.description}</p>
      </TextWrapper>
    </Container>
  )
}

export default Music