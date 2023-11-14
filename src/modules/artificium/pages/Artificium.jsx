import ComOne from './../components/component_1/ComOne';
import EditImage from './../components/component6/EditImage.jsx';
import Message from './../components/Message/Message.jsx';
import Share from './../components/Share/Share';
import {chatinfo, chatinfo1, chatinfo2, chatinfo3, chatinfo4, message} from './../data/User.jsx'
import Comop4 from './../components/component5/Comop4.jsx';
import Compo5 from './../components/component5/Compo5.jsx';
import './ArtificiumStyle.css'
import CardChat from '../../chat/components/Mainchat/CardChat/CardChat.jsx';


const Artificium = () => {
  return (
    <div className='artificium' >
    < ComOne/>
    <CardChat ChatInfo={chatinfo}/>
    < Message   
      avatar={message[3].avatar}
      name={message[3].name}
      title={message[3].messageTag}
      displyMessageTag={false}
      text1={message[3].text1} 
      text2={message[3].text2}
      image={message[3].image}
      displayImage= {["","",""]}
      displayButton="true"
      />
    <CardChat ChatInfo={chatinfo1}/>
    < Comop4 />
      <CardChat ChatInfo={chatinfo1}/>
      < Message   
      avatar={message[4].avatar}
      name={message[4].name}
      title={message[4].messageTag}
      displyMessageTag={true}
      text1={message[4].text1} 
      text2={message[4].text2}
      image={message[4].image}
      displayImage= {["","",""]}
      displayButton="true"
      />
      <CardChat ChatInfo={chatinfo3}/>
    < Message   
        avatar={message[1].avatar}
        name={message[1].name}
        title={message[1].messageTag}
        displyMessageTag={true}
        text1={message[1].text1} 
        text2={message[1].text2}
        image={message[1].image}
        displayImage= {["true","",""]}
        displayButton={false}
      />

    < Message   
      avatar={message[0].avatar}
      name={message[0].name}
      title={message[0].messageTag}
      displyMessageTag={true}
      text1={message[0].text1} 
      text2={message[0].text2}
      image={message[0].image}
      displayImage= {["true","true","true"]}
      displayButton="true"
      />
      <CardChat ChatInfo={chatinfo4}/>
      < Compo5 />
      < Message   
        avatar={message[2].avatar}
        name={message[2].name}
        title={message[2].messageTag}
        displyMessageTag={false}
        text1={message[2].text1} 
        text2={message[2].text2}
        image={message[2].image}
        displayImage= {["true","true","true"]}
        displayButton="true"
      />
{/* 
   < Share />
  < EditImage /> */}
  </div>
  )
}

export default Artificium