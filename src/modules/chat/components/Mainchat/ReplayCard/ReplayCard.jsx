import React from 'react'
import './ReplayCard.css'
import CardChat from '../CardChat/CardChat'
import { AdamGreenInfo, DavidInfo } from '../../../data/chats'

const ReplayCard = () => {
  return (
    <div className='ma-container-replay'>
      <div className='ma-replay'>
          <CardChat ChatInfo={DavidInfo}/>

          <div className='ma-replay-two'>
            <CardChat ChatInfo={AdamGreenInfo}/>
          </div>

      </div>
    </div>
  )
}

export default ReplayCard