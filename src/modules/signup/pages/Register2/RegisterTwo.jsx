import './../Register/RegisterStyle.css'
import RegisterImg from './../../assets/register.png'
import Heading from '../../components/Heading/Heading'
import Bottom from '../../components/Bottom/Bottom'
import Logo from './../../assets/Logo.svg'
import ContentTwo from '../../components/ContentTwo/ContentTwo'

const RegisterTwo = () => {
  return (
    <div className='aj-register'>
      <div className="aj-main-register-content">
        <Heading logo={Logo} text="LogIn"/>
        <div className="aj-content-container">
          < ContentTwo />
        </div>
        <Bottom copy="Artificium.app © 2023" policy="Privacy Policy"/>
      </div>
      <img className='aj-register-img' src={RegisterImg} alt="Register Img" /> 
    </div>
  )
}
export default RegisterTwo