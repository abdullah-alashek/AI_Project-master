import Header from '../components/HeaderComponent/Header'
import Sidebar from '../components/SidebarComponent/Sidebar'
import Footer from '../components/FooterComponent/Footer'
import './../assets/HomePageStyle.css'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='nm-home-page'>
        <Sidebar />
        <div className='nm-home-page-content'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default HomePage