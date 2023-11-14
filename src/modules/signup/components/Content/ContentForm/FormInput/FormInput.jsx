import './FormInputStyle.css'

const FormInput = ({text, type}) => {
  return (
    <div className='aj-form-input'>
      <p>{text}</p>
      <input type={type} placeholder={text}/>
    </div>
  )
}

export default FormInput