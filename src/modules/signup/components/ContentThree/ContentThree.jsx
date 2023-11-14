import { Link } from 'react-router-dom'
import Users from './../../assets/Users.svg'
import './ContentThreeStyle.css'
const ContentThree = () => {
  return (
    <div className='contentThree'>
        <div className="images">
            <img src={Users} alt="" />
        </div>
        <div className="text">
            <h2>Sophia, Kamil, Emily and 2,012 others are already here!</h2>
            <p>But... it looks like you don't have access to this workspace.</p>
        </div>
        <div className="access">
            <Link to="/accessworkspace" className="aj-accessworkspace">Access request</Link>
        </div>
        <div className="or">
            or
        </div>
        <div className="back">
            <button>Back</button>
        </div>
    </div>
  )
}

export default ContentThree