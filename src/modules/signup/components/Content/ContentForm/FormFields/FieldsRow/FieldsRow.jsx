import FormInput from '../../FormInput/FormInput'
import './FieldsRowStyle.css'

const FieldsRow = ({firstText, secondText, type}) => {
  return (
    <div className='aj-fields-row'>
      <FormInput text={firstText} type={type}/>
      <FormInput text={secondText} type={type}/>
    </div>
  )
}

export default FieldsRow