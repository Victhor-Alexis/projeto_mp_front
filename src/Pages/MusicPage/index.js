import React from 'react'
import { useHistory } from 'react-router'
import BigMusic from '../../Components/BigMusic'
import Button from '../../Components/Button'
import Header from '../../Components/Header'
import { ButtonsWrapper, Container } from './styles'
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { api } from "../../services/api"
import { useParams } from "react-router"
import { useUserContext } from '../../Context/userContext'

const MusicPage = () => {
  const history = useHistory();

  let { id } = useParams()
  const { user } = useUserContext();
    
  const [music, setMusic] = useState({})

  const fetchMusic = async () => {
      const response = await api.get(`/musics/show/${id}`)
      console.log(response.data)
      setMusic(response.data)
  }

  useEffect(() => {
      fetchMusic()
  }, [])

  return (
    <Container>
      <Header/>
      <BigMusic music={music}/>
      <ButtonsWrapper>
        <Button onClick={()=> {history.push("/recommend"); }}>Recomendar por gênero</Button>
        <Button onClick={()=>history.push("/recommend_fav")}>Recomendar por interesse</Button>
        { 
          user && <Button onClick={()=>history.push("/favorites")} >Favoritos</Button>
        }
      </ButtonsWrapper>
    </Container>
  )
}

export default MusicPage