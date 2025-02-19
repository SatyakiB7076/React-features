import React from 'react'

const Login = () => {
  return (
    <form className='form-group custom-form'>
        <label>Email </label>
      <input type="email" required className='form-control' />
      <label>Password</label>
      <input type="password" required className='form-control' />
    </form>
  )
}

export default Login
