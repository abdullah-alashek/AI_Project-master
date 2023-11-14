import './FormCheckboxStyle.css'

const FormCheckbox = ({text, termsText}) => {
  return (
    <div className='aj-form-checkbox'>
      <div className="aj-checkbox-icon"></div>
      <p>{text} <span>{termsText}</span></p>
    </div>
  )
}

export default FormCheckbox