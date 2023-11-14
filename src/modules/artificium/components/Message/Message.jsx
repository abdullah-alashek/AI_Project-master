import MessageContent from './MessageContent/MessageContent'
import './MessageStyle.css'



const Message = ({avatar,text1,text2,name,title,displayImage,image,displyMessageTag,displayButton}) => {
  return (
    <div className='aj-message'>
    
      <img className='avatar-img' src={avatar} alt="avatar" />
      <MessageContent name={name} title={title} text1={text1} text2={text2} image={image} displayButton={displayButton} displayImage={displayImage} displyMessageTag={displyMessageTag} />
    </div>
  )
}

export default Message