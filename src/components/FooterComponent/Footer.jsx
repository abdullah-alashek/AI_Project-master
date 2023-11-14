import { footerMicrophone, footerAttachment, footerPaperPlane, footerInputPlaceholder } from '../../data/footerData'
import './FooterStyle.css'

const Footer = () => {
  return (
    <div className='nm-home-page-footer'>
      <div className='nm-home-page-footer-microphone'>
        <img src={footerMicrophone} alt='microphone-icon'/>
      </div>
      <input className='nm-home-page-footer-input' placeholder={footerInputPlaceholder}/>
      <div className='nm-home-page-footer-attachment'>
        <img src={footerAttachment} alt='attachment-icon'/>
      </div>
      <div className='nm-home-page-footer-dpaperplane'>
        <img src={footerPaperPlane} alt='dpaperplane-icon'/>
      </div>
    </div>
  )
}

export default Footer