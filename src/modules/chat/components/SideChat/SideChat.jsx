import MemberList from "./MemberList/MemberList"
import ChatList from "./ChatList/ChatList"
import users from '../../assets/users.svg'
import comment from '../../assets/chat-bubble.svg'
import './SideChat.css'
import { useState } from "react"

const SideChat = () => {
    const[member,setstate]=useState(true)
    function ismember(member){
    setstate((member))
  }
  return (
    <div className="sn-side-container">
      <div className="sn-side-chat">
          {(member===true)?<MemberList/>:<ChatList/>}
              <div className="sn-footer-sidebar">
                  <button className="sn-btn-chat" onClick={()=>ismember(false)}>
                    <img src={comment} alt="" />Chat</button>
                  <button className="sn-btn-member" onClick={()=>ismember(true)}> 
                    Member <img src={users} alt="" /></button>
              </div>
        </div>
    </div>
  )
}

export default SideChat