import './../Register/RegisterStyle.css'
import './RegisterFourStyle.css'
import RegisterImg from './../../assets/register.png'
import Heading from '../../components/Heading/Heading'
import Bottom from '../../components/Bottom/Bottom'
import Logo from './../../assets/Logo.svg'
import ContentFour from '../../components/ContentFour/ContentFour'

const RegisterFour = () => {
  return (
    <div className='aj-register'>
      <div className="aj-main-register-content three">
        <Heading logo={Logo} text="LogIn"/>
        <div className="aj-content-container">
          < ContentFour />
        </div>
        <Bottom copy="Artificium.app © 2023" policy="Privacy Policy"/>
      </div>
      <img className='aj-register-img three' src={RegisterImg} alt="Register Img" /> 
    </div>  )
}

export default RegisterFour