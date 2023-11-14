import './HeadingStyle.css'
import { Link } from 'react-router-dom'

const Heading = ({logo, text}) => {
  return (
    <div className='aj-heading'>
      <img className='aj-logo' src={logo} alt="" />
      <Link to="/login" className='ab-login'>{text}</Link>
    </div>
  )
}

export default Heading