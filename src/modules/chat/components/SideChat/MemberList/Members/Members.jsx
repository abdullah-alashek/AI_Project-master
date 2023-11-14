import './Members.css'
const Members = ({userInfo}) => {
  return (
    <div >
      {userInfo.map ((item , index)=> (
        <div  key={index} className="sn-member">
            <img src={item.img} alt=""/>
            <div className="sn-text-member">
             <h1 className='sn-name-member'>{item.name}</h1>
             <p className='sn-descreption1'><span className='sn-descreption2'>{item.descreption2}</span>{item.descreption1}</p>
             <p className='sn-descreption3'><span className='sn-descreption4'>{item.descreption3}</span>{item.descreption4}</p>
             <p className='sn-descreption5'>{item.descreption5}</p> 
            </div>
          </div>
      ))}
    </div>
  )
}

export default Members