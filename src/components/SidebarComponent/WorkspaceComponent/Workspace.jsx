import user from './../../../assets/homeimages/user.svg'
import chevrondomn from './../../../assets/homeimages/chevrondown.svg'
import './WorkspaceStyle.css'

const Workspace = () => {
  return (
    <div className='nm-home-page-sidebar-workspace'>
        <div className='nm-home-page-sidebar-workspace-user'>
            <img src={user} alt='user-avatar' className='nm-home-page-sidebar-workspace-user-avatar'/>
            <div className='nm-home-page-sidebar-workspace-user-name'>
                <p className='nm-para-1'>Intellisys</p>
                <p className='nm-para-2'>12 members</p>
            </div>
        </div>
        <div className='nm-chevron-down'>
            <img src={chevrondomn} alt='chevron-down' className='nm-chevron-down-icon'/>
        </div>
    </div>
  )
}

export default Workspace