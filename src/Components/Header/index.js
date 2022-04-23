import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const Header = () => {
  return (
    <Container>
      <Link to="/home">Home</Link>
    </Container>
  )
}

export default Header