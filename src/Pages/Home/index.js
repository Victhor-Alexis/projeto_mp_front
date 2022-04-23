import React from 'react'
import Header from '../../Components/Header'
import Music from '../../Components/Music'
import Button from '../../Components/Button'
import { ButtonsWrapper, Container, MusicsBox } from './styles'
import { useHistory } from 'react-router'

const Home = () => {
  /* Adicionar map com todas as músicas*/
  const history = useHistory()


  return (
    <Container>
      <Header/>
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
        <Button onClick={()=>history.push("/favorites")} >Favoritos</Button>
      </ButtonsWrapper>
    </Container>
  )
}

export default Home