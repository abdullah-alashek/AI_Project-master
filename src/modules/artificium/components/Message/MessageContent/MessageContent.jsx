import MessageActions from './MessageActions/MessageActions'
import './MessageContentStyle.css'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageImages from './MessageImages/MessageImages'
import MessageTags from './MessageTags/MessageTags'

const MessageContent = ({text2, text1,name,title,displayImage,image,displyMessageTag,displayButton}) => {
  return (
    <div className='aj-message-content'>
      <MessageHeader title={name} time='just now' text={text1} />
      <MessageTags displyMessageTag={displyMessageTag} title={title}/>
      <p className='aj-content-text'>{text2}</p>
      <MessageImages image={image} displayImage={displayImage} />
      <MessageActions displayButton={displayButton} />
    </div>
  )
}

export default MessageContent