import mail from "./../../../assets/loginimages/mail.svg"
import password from "./../../../assets/loginimages/password.svg"
import google from "./../../../assets/loginimages/google.svg"
import apple from "./../../../assets/loginimages/apple.svg"
import { appleButton, continueWith, emailValue, forgetPassword, googleButton, headerH1, headerH1Span, headerP, logInButton, rememberMe } from "../../../data/LoginPageData"
import "./LogInFormContentStyle.css"
import { Link } from 'react-router-dom'

const LogInFormContent = () => {
  return (
    <div className="nm-login-page-form-content">
        <div className="nm-login-page-form-content-header">
            <h1 className="nm-login-page-form-content-header-h1">{headerH1}<span>{headerH1Span}</span></h1>
            <p className="nm-login-page-form-content-header-p">{headerP}</p>
        </div>
        <div className="nm-login-page-form-content-form">
            <div className="nm-login-page-form-content-form-fields">
                <input className="nm-login-page-form-content-form-fields-mail" value={emailValue}></input>
                <img src={mail} alt="mail" />
            </div>
            <div className="nm-login-page-form-content-form-fields">
                <input className="nm-login-page-form-content-form-fields-password" placeholder="Password"></input>
                <img src={password} alt="password" />
            </div>
            <div className="nm-login-page-form-content-form-bottom">
                <label className="nm-login-page-form-content-form-bottom-checkbox">
                    <input type="checkbox" className="nm-login-page-form-content-form-bottom-checkbox-input"></input>
                    <span className="nm-login-page-form-content-form-bottom-checkbox-span"></span>
                    {rememberMe}
                </label>
                <a href="#" className="nm-login-page-form-content-form-bottom-link">{forgetPassword}</a>
            </div>
            <Link to="/home" className="nm-login-page-form-content-form-button">{logInButton}</Link>
            <div className="nm-login-page-form-content-form-divider">{continueWith}</div>
            <div className="nm-login-page-form-content-form-socialbutton">
                <button className="google"><img src={google} alt="google" />{googleButton}</button>
                <button className="apple"><img src={apple} alt="google" />{appleButton}</button>
            </div>
        </div>
    </div>
  )
}

export default LogInFormContent