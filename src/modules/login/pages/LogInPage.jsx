import LogInForm from "./../components/LogInFormComponent/LogInForm"
import mainImage from "./../assets/loginimages/mainImage.svg"
import "./../assets/LogInPageStyle.css"

const LogInPage = () => {
  return (
    <div className="nm-login-page-container">
        <LogInForm />
        <img src={mainImage} alt="mainImage" className="nm-login-page-container-mainimage"/>
    </div>
  )
}

export default LogInPage