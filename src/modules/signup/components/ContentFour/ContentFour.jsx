import { Link } from 'react-router-dom'
import './ContentFourStyle.css'
import avatar from './../../assets/Avatar.svg'
import Users1 from './../../assets/Users1.svg'
const ContentFour = () => {
  return (
    <div className='contentFour'>
        <div className="avatar">
            <img src={avatar} alt="" />
            <h2>Vertexia</h2>
            <p>vertexia.artficium.app</p>
        </div>
        <div className="buttons">
            <button className='workspace'>Change workspace</button>
            <Link to="/home" className="aj-joinnow">Join Now</Link>
        </div>
        <div className="users">
            <img src={Users1} alt="" />
            <p>and 873 others have already joined</p>
        </div>
    </div>
  )
}

export default ContentFour