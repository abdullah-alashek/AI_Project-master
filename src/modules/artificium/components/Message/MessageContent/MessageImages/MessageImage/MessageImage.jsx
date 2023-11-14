import './MessageImageStyle.css'
import { Link } from 'react-router-dom'

const MessageImage = ({url,active}) => {
  return (
    <div className={!active? 'aj-message-image none': 'aj-message-image'} >
      <Link to='/editimage'><img src={url} alt="Message Img" /></Link>

    </div>
  )
}

export default MessageImage