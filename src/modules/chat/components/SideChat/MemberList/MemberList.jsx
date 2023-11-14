import Heading from "./Heading/Heading"
import Members from "./Members/Members"
import { useState } from "react"
import './MemberList.css'
import {userOnlineInfo} from "./../../../data/users"
import {userOfflineInfo} from "./../../../data/users"

const MemberList = () => {
  ///////////////Heading information///////////////
const[firstTypeList] = useState("Currently Online");
const[firstNumberUser] = useState("4");
const[secTypeList] = useState("Offline");
const[secNumberUser] = useState("12");

  return (
    <div>
      <Heading TypeList={firstTypeList} NumberUser={firstNumberUser} />
      <Members userInfo={userOnlineInfo}/>
      <Heading TypeList={secTypeList} NumberUser={secNumberUser} />
      <div className="sn-member-offline">
      <Members userInfo={userOfflineInfo}/>
      </div>
    </div>
  )
}

export default MemberList