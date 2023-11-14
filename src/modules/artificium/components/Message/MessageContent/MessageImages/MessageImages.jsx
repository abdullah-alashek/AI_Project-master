import MessageImage from './MessageImage/MessageImage'
import './MessageImagesStyle.css'


const MessageImages = ({displayImage,image}) => {
  return (
    <div className='aj-message-images'>
      <MessageImage active={displayImage[0]} url={image[0]}/>
      <MessageImage active={displayImage[1]} url={image[1]}/>
      <MessageImage active={displayImage[2]} url={image[2]}/>
    </div>
  )
}

export default MessageImages