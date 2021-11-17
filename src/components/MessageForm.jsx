import { PictureOutlined, SendOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'

const MessageForm = (props) => {
  const { chatId, creds } = props
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = value.trim()

    if(text.length > 0) sendMessage(creds, chatId, { text, sender_username: localStorage.getItem('username') })
    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)

    isTyping(props, chatId)
  }

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '', sender_username: localStorage.getItem('username') })
  }

  return (
    <form 
      className="message-form"
      onSubmit={handleSubmit}>
        <input
          type="text"
          className="message-input"
          placeholder="Type something"
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: 'none' }}
          className="message-input"
          placeholder="Type something"
          onChange={handleUpload}
        />
        <button type="submit" className="send-button">
          <SendOutlined className="picture-icon"/>
        </button>
    </form>
  )
}

export default MessageForm