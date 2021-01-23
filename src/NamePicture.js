import React from 'react'



function NamePicture(prop){
    return(
      <div className = "namePicture"  >
          <li class="" style={{display:"flex", alignItems:"center", }}>
                    <p style={{marginRight:"3px", maxWidth:"50px", overflow:"hidden", textOverflow:"ellipsis"}}>{prop.name}</p>
                    <img width = "20px" height="20px" style ={{borderRadius:"50%", marginRight:"3px"}} src={prop.image} alt={prop.alt}/>
                    <img src={prop.arrow} alt={prop.alt}/>
        </li> 
      </div>

     
     
    )
  }
  export default NamePicture