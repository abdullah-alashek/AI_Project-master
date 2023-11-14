import React, { createContext } from 'react'
import Head from './Head'
import List from './List'

const Card = ({Icons, ListTexts, HeadText}) => {

  return (
    <div className="card">
        < Head icons={Icons} HeadText={HeadText}/>
        < List ListTexts={ListTexts} />
    </div>
 
  )
}

export default Card