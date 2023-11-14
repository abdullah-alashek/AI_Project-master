import React from 'react'
import { useContext } from 'react'
import MyContext from './ComOne'
const Head = ({icons ,HeadText}) => {
  const con = useContext(MyContext);
  return (
    <div className='head'>
        <div className="image">
            <img src={icons} alt="" />
        </div>
        <h2>{HeadText}</h2>
    </div>
  )
}

export default Head