import './ContentButtonStyle.css'
import { Link } from 'react-router-dom'

const ContentButton = ({text}) => {
  return (
    <Link to="/workspace" className='aj-content-button'>{text}</Link>
  )
}

export default ContentButton