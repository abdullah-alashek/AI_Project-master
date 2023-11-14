import ContentButton from '../ContentButton/ContentButton'
import './ContentFormStyle.css'
import FormCheckbox from './FormCheckbox/FormCheckbox'
import FormFields from './FormFields/FormFields'

const ContentForm = () => {
  return (
    <div className='aj-content-form'>
      <FormFields />
      <FormCheckbox text="I agree with" termsText="Terms and conditions"/>
      <ContentButton text="Create free account"/>
    </div>
  )
}

export default ContentForm