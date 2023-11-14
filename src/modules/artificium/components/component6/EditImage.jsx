import React from 'react'
import HeadingEdit from './HeadingEdit'
import './../../assets/EditImage/EditImage.css'
import Editor from './Editor'
import ImageBox from './ImageBox'
const EditImage = () => {
  return (
    <div className='editimage'>
        < HeadingEdit />
        <div className="edit">
            < ImageBox />
            < Editor />
        </div>
    </div>
  )
}

export default EditImage