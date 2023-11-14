import search from './../../../assets/homeimages/search.svg'
import billing from './../../../assets/homeimages/billing.svg'
import './GeneralTopStyle.css'

const GeneralTop = () => {
  return (
    <div className='nm-home-page-sidebar-general-top'>
        <p className='nm-home-page-sidebar-general-top-heading'>GENERAL</p>
        <div className='nm-home-page-sidebar-general-top-list'>
            <div className='nm-home-page-sidebar-general-top-list-item-1'>
                <div className='nm-home-page-sidebar-general-top-list-item-1-label'>
                    <div className='nm-home-page-sidebar-general-top-list-item-1-label-search'>
                        <img src={search} alt='search-icon'/>
                    </div>
                    <p>Search</p>
                </div>
                <div className='nm-home-page-sidebar-general-top-list-item-1-badge'>
                    <p>⌘ S</p>
                </div>
            </div>
            <div className='nm-home-page-sidebar-general-top-list-item-2'>
                <div className='nm-home-page-sidebar-general-top-list-item-2-label'>
                    <div className='nm-home-page-sidebar-general-top-list-item-2-label-billing'>
                        <img src={billing} alt='billing-icon'/>
                    </div>
                    <p>Billing</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralTop