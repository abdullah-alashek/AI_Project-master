import React from 'react'
import './../../assets/ComOne/comOne.css'
import Card from './Card'
import Icon from './../../assets/ComOne/Icon.svg'
import Icon1 from './../../assets/ComOne/Icon (1).svg'
import Icon2 from './../../assets/ComOne/Icon (2).svg'
import Icon3 from './../../assets/ComOne/Icon (3).svg'
import {ListText} from '../../data/User'
const ComOne = () => {

  return (
    <div className="comOne">
      <div className="title">
        <h1>Innovation Starter Pack</h1>
        <p>Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>
      </div>
      <div className="content">
          < Card Icons={Icon}  HeadText={ListText[0].headText[0]} ListTexts={ListText[0].textList1}/>
          < Card Icons={Icon1} HeadText={ListText[0].headText[1]} ListTexts={ListText[0].textList2}/>
          < Card Icons={Icon2} HeadText={ListText[0].headText[2]} ListTexts={ListText[0].textList3}/>
          < Card Icons={Icon3} HeadText={ListText[0].headText[3]} ListTexts={ListText[0].textList4}/>
      </div>
      </div>
  )
}

export default ComOne