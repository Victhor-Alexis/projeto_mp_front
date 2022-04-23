import React from 'react'
import Header from '../../Components/Header'
import Music from '../../Components/Music'
import Button from '../../Components/Button'
import { ButtonsWrapper, Container, MusicsBox } from './styles'
import { useHistory } from 'react-router'

const Favorites = () => {
  /* Adicionar map com todas as músicas*/
  const history = useHistory()

  return (
    <Container>
      <Header/>
      <h3>Meus favoritos</h3>
      <MusicsBox>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
        <Music/>
      </MusicsBox>
      <ButtonsWrapper>
        <Button>Recomendar</Button>
      </ButtonsWrapper>
    </Container>
  )
}

export default Favorites