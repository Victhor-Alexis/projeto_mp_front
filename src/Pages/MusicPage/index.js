import React from 'react'
import { useHistory } from 'react-router'
import BigMusic from '../../Components/BigMusic'
import Button from '../../Components/Button'
import Header from '../../Components/Header'
import { ButtonsWrapper, Container } from './styles'

const MusicPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Header/>
      <BigMusic/>
      <ButtonsWrapper>
        <Button>Recomendar</Button>
        <Button onClick={()=>history.push("/favorites")} >Favoritos</Button>
      </ButtonsWrapper>
    </Container>
  )
}

export default MusicPage