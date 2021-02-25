import React from 'react'
// import './custom1.css'
import GroupedImages from './GroupedImages';
import PictureCard from './PictureCard';
import {Card, Button} from "antd"
import 'antd/dist/antd.css';
import {section1Small1, section1Small2, section1Big} from './Arrays'

function SubSection1(prop){
    const Url = prop.cards.image

    const header_Background = {
    backgroundImage: Url,
    backgroundSize: "100% 100%",
    width:"97%",
    height:"300px",
    border:"2px solid red"
   
    
    }

    // const cards = section1Big.map(item => <div className=""><PictureCard card = {item}/> </div> )

    return(
        <div className = "subSection1">
                         <div className="check"  style = {header_Background}>
                             
                             <div style={{ width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                                 <div style={{ width:"33%"}}>
                                     <div className="flex-aligns">
                                         <p >{prop.cards.from}</p>
                                             <img src ="./images/Arrow2.svg" width="20px" style={{margin:"0 7.5px"}}/>
                                             <h1>{prop.cards.to}</h1>
                                     </div>
                                     <p className="check_date">{prop.cards.date}</p>
                                 </div>
                                 <div> <Button style={{fontWeight:"bold",}}>{prop.cards.price}</Button></div>
                                  
                             </div>
                                 {/* <div><GroupedImages image = "./images/lekki.png" height="425px" width="425px"/></div> */}
                             
                             </div>
                             
                </div>

                
               
    
    )
}
export default SubSection1