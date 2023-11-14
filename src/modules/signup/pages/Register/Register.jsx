import './RegisterStyle.css'
import RegisterImg from './../../assets/register.png'
import Heading from '../../components/Heading/Heading'
import Content from '../../components/Content/Content'
import Bottom from '../../components/Bottom/Bottom'
import Logo from './../../assets/Logo.svg'

const Register = () => {
  return (
    <div className='aj-register'>
      <div className="aj-main-register-content">
        <Heading logo={Logo} text="LogIn"/>
        <div className="aj-content-container">
          <Content headingTitle="Connect with your team and bring your creative ideas to life."/>
        </div>
        <Bottom copy="Artificium.app © 2023" policy="Privacy Policy"/>
      </div>
      <img className='aj-register-img' src={RegisterImg} alt="Register Img" /> 
    </div>
  )
}
export default Register