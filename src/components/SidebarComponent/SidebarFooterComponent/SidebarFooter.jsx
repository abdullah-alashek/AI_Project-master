import activeuser from './../../../assets/homeimages/activeuser.svg'
import cog from './../../../assets/homeimages/cog.svg'
import './SidebarFooterStyle.css'

const SidebarFooter = () => {
  return (
    <div className='nm-home-page-sidebar-footer'>
        <div className='nm-home-page-sidebar-footer-user'>
            <div className='nm-home-page-sidebar-footer-user-info'>
                <img src={activeuser} alt='user-avatar' className='nm-home-page-sidebar-footer-user-info-avatar'/>
                <div className='nm-home-page-sidebar-footer-user-info-name'>
                    <p className='nm-para-1'>Ryan Lee</p>
                    <p className='nm-para-2'>Premium</p>
                </div>
            </div>
            <div className='nm-cog'>
                <img src={cog} alt='cog' className='nm-cog-icon'/>
            </div>
        </div>
    </div>
  )
}

export default SidebarFooter