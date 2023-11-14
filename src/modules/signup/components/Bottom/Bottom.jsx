import './BottomStyle.css'

const Bottom = ({copy, policy}) => {
  return (
    <div className='aj-bottom'>
      <p className='aj-copyright'>{copy}</p>
      <p className='aj-policy'>{policy}</p>
    </div>
  )
}

export default Bottom