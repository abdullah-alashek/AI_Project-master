import './../../assets/Compo41Style.css';



const Compo41 = (props) => {
  return (
    <div className='Compo41'>
        <img src={props.img} alt='nothing' />
        <p>{props.description[0]} <br/>{props.description[1]} </p>
    </div>
  )
}

export default Compo41