import ContentForm from './ContentForm/ContentForm'
import ContentHeading from './ContentHeading/ContentHeading'
import './ContentStyle.css'

const Content = ({headingTitle}) => {
  return (
    <div className='aj-content'>
      <ContentHeading title={headingTitle}/>
      <ContentForm />
    </div>
  )
}

export default Content