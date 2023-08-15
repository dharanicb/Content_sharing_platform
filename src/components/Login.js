import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const navigate = useHistory()

  const handleSubmit = e => {
    e.preventDefault()

    if (name && number) {
      navigate.push('/home')
    }
  }

  return (
    <div className="main-div">
      <div className="login-container">
        <h1>Member Login</h1>
        <form className="login-form" onSubmit={e => handleSubmit(e)}>
          <div className="input-div">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="input-div">
            <input
              type="tel"
              value={number}
              onChange={e => setNumber(e.target.value)}
              placeholder="Contact Number"
              required
              maxLength={10}
            />
          </div>
          <div className="mt-10">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
