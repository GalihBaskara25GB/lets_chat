import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="1a544329-b805-4969-b3c7-682a2bc7c3c0"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('passWord')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App