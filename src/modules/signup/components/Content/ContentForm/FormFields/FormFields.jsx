import FieldsRow from './FieldsRow/FieldsRow'
import './FormFieldsStyle.css'

const FormFields = () => {
  return (
    <div className='aj-form-fields'>
      <FieldsRow firstText="First Name" secondText="Last name" type="text"/>
      <FieldsRow firstText="Password" secondText="Repeat password" type="password"/>
    </div>
  )
}

export default FormFields