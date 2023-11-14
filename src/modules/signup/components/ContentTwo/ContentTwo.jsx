import { Link } from 'react-router-dom'
import './ContentTwoStyle.css'
const ContentTwo = () => {
  return (
    <div className="contentTwo">
        <div className="text">
            <h2>Join or Create a Workspace</h2>
            <p>Connect with others by joining an existing workspace or create a new one to collaborate with your team.</p>
        </div>
        <div className="inputUrl">
            <input type="text" placeholder='Your workspace URL .artificium.app' />
            <Link to="/joinworkspace" className="aj-workspacebutton">Join Workspace</Link>
        </div>
        <div className="lines">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
        </div>
        <div className="newwork">
            <button>Create new Workspace</button>
        </div>
    </div>

  )
}

export default ContentTwo