import logo from "./../../assets/loginimages/Logo.svg"
import LogInFormContent from "./LogInFormContentComponent/LogInFormContent"
import { dontHaveAccount, signUp } from "../../data/LoginPageData"
import "./LogInFormStyle.css"
import { Link } from 'react-router-dom'

const LogInForm = () => {
  return (
    <div className="nm-login-page-form">
        <img src={logo} alt="logo" className="nm-login-page-form-logo"/>
        <LogInFormContent />
        <div className="nm-login-page-form-footer">
            <p className="nm-login-page-form-footer-para">{dontHaveAccount}</p>
            <Link to="/signup" className="nm-login-page-form-footer-link">{signUp}</Link>
            <a href="#" className="nm-login-page-form-footer-link"></a>
        </div>
    </div>
  )
}

export default LogInForm