import square from './../../../assets/homeimages/square.svg'
import triangle from './../../../assets/homeimages/triangle.svg'
import squareorange from './../../../assets/homeimages/squareorange.svg'
import octagon from './../../../assets/homeimages/octagon.svg'
import pluscircle from './../../../assets/homeimages/plus-circle.svg'
import './GeneralDownStyle.css'

const GeneralDown = () => {
  return (
    <div className='nm-home-page-sidebar-general-down'>
         <p className='nm-home-page-sidebar-general-down-heading'>PROJECTS</p>
         <div className='nm-home-page-sidebar-general-down-list'>
            <div className='nm-home-page-sidebar-general-down-list-item-1'>
                <div className='nm-home-page-sidebar-general-down-list-item-1-label'>
                    <div className='nm-home-page-sidebar-general-down-list-item-1-label-square'>
                        <img src={square} alt='square-icon'/>
                    </div>
                    <p>Orbital Oddysey</p>
                </div>
            </div>
            <div className='nm-home-page-sidebar-general-down-list-item-2'>
                <div className='nm-home-page-sidebar-general-down-list-item-2-label'>
                    <div className='nm-home-page-sidebar-general-down-list-item-2-label-triangle'>
                        <img src={triangle} alt='triangle-icon'/>
                    </div>
                    <p>Digital Product Launch</p>
                </div>
            </div>
            <div className='nm-home-page-sidebar-general-down-list-item-3'>
                <div className='nm-home-page-sidebar-general-down-list-item-3-label'>
                    <div className='nm-home-page-sidebar-general-down-list-item-3-label-squareorange'>
                        <img src={squareorange} alt='squareorange-icon'/>
                    </div>
                    <p>Brand Refresh</p>
                </div>
            </div>
            <div className='nm-home-page-sidebar-general-down-list-item-4'>
                <div className='nm-home-page-sidebar-general-down-list-item-4-label'>
                    <div className='nm-home-page-sidebar-general-down-list-item-4-label-octagon'>
                        <img src={octagon} alt='octagon-icon'/>
                    </div>
                    <p>Social Media Strategy</p>
                </div>
            </div>
            <div className='nm-home-page-sidebar-general-down-list-item-5'>
                <div className='nm-home-page-sidebar-general-down-list-item-5-label'>
                    <div className='nm-home-page-sidebar-general-down-list-item-5-label-pluscircle'>
                        <img src={pluscircle} alt='pluscircle-icon'/>
                    </div>
                    <p>Add new project</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralDown