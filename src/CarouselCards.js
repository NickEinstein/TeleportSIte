import React from 'react'
import Carousels from "./Carousels"
// import { Carousels } from 'antd';
import 'antd/dist/antd.css';

function CarouselCards(prop){

    // const cards = section2Houses.map(item => <div className="houseMath4"><Picture_card card = {item}/> </div> )

    // const image = prop.card.image

    // const header_Background = {
    // backgroundImage: image,
    // backgroundSize: "cover",
    // width:"100%",
    // height:"100px",
    // border:"2px solid red",
    // // marginBottom:"20px"
    // }

    const Url = prop.card.image

    const header_Background = {
      backgroundImage: Url,
      backgroundSize: "100% 100%",
      width:"100%",
      height:"100%",
   
      marginBottom:"20px"
      
      }


    return(
     
                <div>
  <div style={{height:"397px"}}>
  <div className="check"  style = {header_Background}>
     
                     
     <div style={{ width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                <div style={{  width:"32%"}}>
                    <a className="">
                        <h1> {prop.card.name} </h1>
                        <p className="check_date">{prop.card.caption}</p>
                    </a>
                   
                </div>
               
                 
            </div>
                  
      </div>
  </div>
</div>
               
        
    )
}
export default CarouselCards