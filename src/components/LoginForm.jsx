import axios from 'axios'
import { useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [passWord, setPassWord] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = { 'Project-ID': '1a544329-b805-4969-b3c7-682a2bc7c3c0', 'User-Name': username, 'User-Secret': passWord}
    
    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })

      localStorage.setItem('username', username)
      localStorage.setItem('passWord', passWord)
      window.location.reload()
    } catch (error) {
      setError('Looks like you are trying to log in with wrong username or password')
    }
  
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Lets Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Your password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            required
          />
          <div align="center">
            <button 
              type="submit"
              className="button">
                <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm