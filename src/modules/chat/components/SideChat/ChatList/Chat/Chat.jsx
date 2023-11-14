import './Chat.css'

const Chat = ({ChatlistInfo}) => {
  return (
  <div>
    {ChatlistInfo.map((item,index)=>(
      <div key={index} className='sn-chatside-container'>
           <div className='sn-heading-chat'>
              <p className='sn-chat-p'>
                  <img className='sn-chevron' src={item.icon} alt=''/>{item.title}</p>
            </div>
            <div className={(item.active)?'sn-divider active': 'sn-divider}'}></div>
        </div>
    ))}
  </div>
  )
}
export default Chat
