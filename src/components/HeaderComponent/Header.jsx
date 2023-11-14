import './HeaderStyle.css'
import { Link, NavLink } from 'react-router-dom'
import { headerTitle, headerDesc, headerImages, headerExtraImage, headerShare, headerShareText, headerEdit, headerArtificiumIcon, headerChatIcon, headerLibraryIcon, headerArtificiumText, headerChatText, headerLibraryText } from '../../data/headerData'

const Header = () => {
  return (
    <div className="nm-home-page-header">
      <div className='nm-home-page-header-heading'>
        <div className='nm-home-page-header-heading-project-name'>
          <p className='nm-para-1'>{headerTitle}</p>
          <p className='nm-para-2'>{headerDesc}</p>
        </div>
        <div className='nm-home-page-header-heading-options'>
          <div className='nm-home-page-header-heading-options-users'>
            {headerImages.map((image) => <img src={image} alt='headerimg1' className='nm-headerimg' key={image.index}/>)}
            <div className='nm-extra-images'>
              <img src={headerExtraImage} alt='extraimages' className='nm-extraimages-icon'/>
            </div>
          </div>
          <div className='nm-home-page-header-heading-options-actions'>
            <div className='nm-home-page-header-heading-options-actions-share'>
              <Link to="/share" className='nm-share-text'><img src={headerShare} alt='share' className='nm-share'/>{headerShareText}</Link>
            </div>
            <div className='nm-home-page-header-heading-options-actions-edit'>
              <img src={headerEdit} alt='edit' className='nm-edit'/>
            </div>
          </div>
        </div>
      </div>
      <nav className='nm-home-page-header-naviagation'>
        <ul className='nm-home-page-header-naviagation-tabs'>
          <li><NavLink to="" className='nm-artificium'><img src={headerArtificiumIcon} alt='artificiumicon' className='nm-artificiumicon'/>{headerArtificiumText}</NavLink></li>
          <li><NavLink to="chat" className='nm-chat'><img src={headerChatIcon} alt='chaticon' className='nm-chaticon'/>{headerChatText}</NavLink></li>
          <li><NavLink to="library" className='nm-library'><img src={headerLibraryIcon} alt='libraryicon' className='nm-libraryicon'/>{headerLibraryText}</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header