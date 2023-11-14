import './ArtificiumCard.css' 

const ArtificiumCard = ({ArtificiumCardInfo}) => {
  return (
    <div>
       {ArtificiumCardInfo.map((item,index) => (
    <div key={index} className='Cards'>

       <div>
          <img className='LI-cardavatar' src={item.img3} alt='not found'/>
      </div>

       <div className='LI-cardcontent'>
          <div className='LI-cardname'>
             <div className='LI-LEEN'>
               <p className='LI-cardtitle'>{item.thetitle}</p>
               <p className='LI-cardaction'>{item.time}</p>
             </div>
        
             
          </div>

          <div><p className='LI-carddisc'>{item.msg}</p>
          </div>

          <div className='LI-container'>
              <div><img src={item.img4} alt="not found"/></div>
              <div><img src={item.img5} alt="not found"/></div>
              <div><img src={item.img6} alt="not found"/></div>
         </div>

         <div className='LI-btn'>       
            <button className='LI-btn1'>{item.button1}</button>
            <button className='LI-btn2'>{item.button2}</button>
        </div>

    </div>
  </div>
  ))}
</div>
  )
}

export default ArtificiumCard