import React from 'react'
import { Container, TextWrapper, OptionsWrapper, Option } from './styles'
import { api } from '../../services/api'
import { useUserContext } from '../../Context/userContext'
import { useHistory } from 'react-router'



const BigMusic = ({ music }) => {

  const history = useHistory()


  const { user } = useUserContext()

  const saveFavorite = async () => {
    const response = await api.post(`/favorites/create`, {
      music_id: music.id,
      user_id: user.id,
      value: 1
    })
    console.log(response.data)
    if(response)
      alert("Música salva nos favoritos")
  }

  return (
    <Container>
      <img alt="foto_do_back" src={`http://localhost:3000${music.photo_url}`} />
      <TextWrapper>
        <h2>{music.title}</h2>
        <h2>{music.genre}</h2>
        <p>{music.description}</p>
      </TextWrapper>
      <OptionsWrapper>
        <Option>
          <h4>Avaliação: {music.average}</h4>
          <form>
            <input type="text" placeholder="nota" />
            <input type="submit" value="Enviar" />
          </form>
        </Option>
        <Option>
          <h4>Salvar:</h4>
          <svg onClick={() => saveFavorite()} width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.25H27.9731" stroke="#ECA820" />
            <path d="M0 10H18.2433" stroke="#ECA820" />
            <path d="M0 18.75H18.2433" stroke="#ECA820" />
            <path d="M35.27 0V20" stroke="#ECA820" />
            <path d="M25.5405 10L45.0001 10" stroke="#ECA820" />
          </svg>
        </Option>
        <Option>
          <h5 onClick={()=>history.push(`/liked_by/${music.id}`)} >Usuários que salvaram</h5>
        </Option>
      </OptionsWrapper>
    </Container>
  )
}

export default BigMusic