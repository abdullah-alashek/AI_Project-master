import React from 'react'
import MainChat from './../components/Mainchat/MainChat'
import SideChat from './../components/SideChat/SideChat'
import './ChatPage.css'

const Chat = () => {
  return (
    <>
    <div className='ma-container-chatpage'>
        <MainChat/>
        <SideChat/>
    </div>
    </>
  )
}

export default Chat