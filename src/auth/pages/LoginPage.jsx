import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigation = useNavigate();
  
  const login = () => {
    navigation('/', {
      replace: true,
    })
  }

  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <button 
          className='btn btn-outline-primary'
          onClick={login}
          >
          Login
        </button>
    </>
  )
}
