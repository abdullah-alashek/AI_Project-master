import React from 'react'
import chevronleft from '../../assets/EditImage/chevron-left.svg'
import Badge from '../../assets/EditImage/Badge.svg'
import Star from '../../assets/EditImage/Star.svg'
import Download from '../../assets/EditImage/Download.svg'
import dots from '../../assets/EditImage/dots.svg'

const HeadingEdit = () => {
  return (
    <div className='head'>
      <div className="projectName">
        <img src={chevronleft} alt="" />
        <p>Modern spaceship in cosmos</p>
        <img src={Badge} alt="" />
      </div>
      <div className="buttons">
          <img src={Star} alt="" />
          <div className="export">
            <p>Export</p>
            <img src={Download} alt="" />
          </div>
          <img src={dots} alt="" />
      </div>
    </div>
  )
}

export default HeadingEdit