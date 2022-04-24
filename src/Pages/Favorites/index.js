import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Music from '../../Components/Music'
import Button from '../../Components/Button'
import { ButtonsWrapper, Container, MusicsBox } from './styles'
import { useHistory } from 'react-router'
import { api } from '../../services/api'
import { useUserContext } from '../../Context/userContext'

const Favorites = () => {
  /* Adicionar map com todas as músicas*/
  const history = useHistory()
  const [favorites, setFavorites] = useState([]);
  const { user } = useUserContext();

  const fetchFavorites = async () => {
    const response = await api.get(`/favorites/index`)
    setFavorites(response.data)
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  return (
    <Container>
      <Header/>
      <h3>Meus favoritos</h3>
      <MusicsBox>
        {
          user && favorites.map((element, i) => {
            if (element.user_id === user.id) {
              return (
                <Music key={element.music.id} music={element.music} onClick={()=>history.push(`/music/${element.music.id}`)}/>
              )
            }
          })
        }
      </MusicsBox>
      <ButtonsWrapper>
        <Button>Recomendar</Button>
      </ButtonsWrapper>
    </Container>
  )
}

export default Favorites