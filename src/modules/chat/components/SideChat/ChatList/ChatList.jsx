import Chat from "./Chat/Chat"
import { ChatListInfo } from "../../../constans/const"
import SpaceshipItem from '../ChatList/SpaceshipItem/SpaceshipItem'
import {SpaceshipInfo} from './../../../data/users'
import  {ChatListBottom} from '../../../constans/const.js'

const ChatList = () => {
  return (
    <div className="ma-chatlist">
      <Chat ChatlistInfo={ChatListInfo} />
       <SpaceshipItem SpacesInfo={SpaceshipInfo}/>
      <Chat ChatlistInfo={ChatListBottom} />
      </div>
  )
}

export default ChatList