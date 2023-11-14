import React from 'react'
import arrow from './../../assets/ComOne/arrow-right.svg'

const List = ({ListTexts}) => {

  return (
    <div className='idtem'>
     {
     ListTexts.map(items =>
      <div key={items} className='item'>
        <p >{items}</p>
        <i><img src={arrow} alt="" /></i>
      </div>
      )}
      
    </div>

  )
}

export default List