import './SpaceshipItem.css'
import glow from '../../../../assets/Badge.png'
import globe from './../../../../assets/Globe-02.svg'

const SpaceshipItem = ({SpacesInfo}) => {
  return (
    <div className='sn-spaceship-list'>
       <div className='sn-itemlistspace-chat'>
          <img src={globe} alt=""/>
          <p className='sn-chat-p-act'>Spaceship Crew</p>
          <img className='sn-spaceship-glow' src={glow} alt=""/>
        </div>

    {SpacesInfo.map((item,index)=>
    (
    <div key={index} className="sn-spaceship-item">
        <img className='sn-spaceship-img'src={item.img} alt=""/>
        <p className="sn-name-space-item">{item.name} </p>
    </div>
     )
  )}
    </div>
  )
}

export default SpaceshipItem