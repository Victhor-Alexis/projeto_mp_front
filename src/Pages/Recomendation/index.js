import React from 'react'
import Header from '../../Components/Header'
import Music from '../../Components/Music'
import Button from '../../Components/Button'
import { ButtonsWrapper, Container, MusicsBox } from './styles'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useUserContext } from '../../Context/userContext'

const Recomendation = () => {
  /* Adicionar map com todas as músicas*/
  const history = useHistory()

  const [musics, setMusics] = useState([])
  const { user } = useUserContext();

  const recommend = async () => {
    if (user) {
      const response = await api.get(`/users/recomend_by_genre/${user.id}`)
      console.log(response.data)
      setMusics(response.data)
    }
  }

  useEffect(() => {
    recommend()
  }, [])

  return (
    <Container>
      <Header />
      <MusicsBox>

        {musics.map((music, i) => {
          return (
            <Music key={music.id} music={music} onClick={() => history.push(`/music/${music.id}`)} />
          )
        })}

      </MusicsBox>
      <ButtonsWrapper>
        <Button onClick={() => history.push("/recommend")}>Recomendar por gênero</Button>
        <Button onClick={() => history.push("/recommend_fav")}>Recomendar por interesse</Button>
        {user && <Button onClick={() => history.push("/favorites")} >Favoritos</Button>}
      </ButtonsWrapper>
    </Container>
  )
}

export default Recomendation