import React from 'react'
import MainHeading from './MainHeading/MainHeading'
import CardChat from './CardChat/CardChat'
import ArtificiumCard from './ArtificiumCard/ArtificiumCard'
import ReplayCard from './ReplayCard/ReplayCard'
import './MainChat.css'
import { LilyInfo ,AdamInfo,EmelyInfo } from '../../data/chats'
import { ArtificumInfo } from '../../data/chats'

const MainChat = () => {
  return (
    <div className='ma-container-mainchat'>
        <MainHeading/>
        
        <div className='ma-chat-container'>
            <CardChat ChatInfo={LilyInfo}/>

            <div className='ma-today'>Today</div>

            <CardChat ChatInfo={AdamInfo}/>
            <CardChat ChatInfo={EmelyInfo}/>
            <ArtificiumCard ArtificiumCardInfo={ArtificumInfo}/>
            <ReplayCard/>
            {/* <Footer/> */}
        </div>

    </div>
  )
}

export default MainChat