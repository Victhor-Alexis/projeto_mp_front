import React from 'react'
import { Container } from './styles'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useParams } from "react-router"


const Liked_by = () => {

    
    let { id } = useParams()

    const [users, setUsers] = useState([])
  
    const fetchUsers = async () => {
      const response = await api.get(`/musics/favorited_by/${id}`)
      console.log(id)
      console.log(response.data)
      setUsers(response.data)
    }
  
    useEffect(() => {
      fetchUsers()
    }, [])


    return (
      <Container>
          {users.map((user, i) => {
            return (
              <div>
                <p key={i} >
                  {user.name}
                </p>
              </div>
            )
          })}
      </Container>
    )
  }
  
  export default Liked_by