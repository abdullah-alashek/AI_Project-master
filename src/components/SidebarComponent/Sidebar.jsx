import Workspace from './WorkspaceComponent/Workspace'
import GeneralTop from './GeneralTopComponent/GeneralTop'
import GeneralDown from './GeneralDownComponent/GeneralDown'
import SidebarFooter from './SidebarFooterComponent/SidebarFooter'
import './SidebarStyle.css'

const Sidebar = () => {
  return (
    <div className='nm-home-page-sidebar'>
      <Workspace />
      <GeneralTop />
      <GeneralDown />
      <SidebarFooter />
    </div>
  )
}

export default Sidebar