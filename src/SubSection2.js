import React from 'react'
// import './custom1.css'
import GroupedImages from './GroupedImages';
import PictureCard from './PictureCard';
import {Card, Button} from "antd"
import 'antd/dist/antd.css';
import {section1Small1, section1Small2, section1Big} from './Arrays'

function SubSection2(prop){
    const Url = prop.cards.image

    const header_Background = {
    backgroundImage: Url,
    backgroundSize: "100% 100%",
    width:"100%",
    height:"250px",
    // border:"2px solid red",
    marginBottom:"20px"
    
    }

    // const cards = section1Big.map(item => <div className=""><PictureCard card = {item}/> </div> )

    return(
        <div className = "subSection2">
                         <div className="check"  style = {header_Background}>
                             
                         <div style={{width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                         <div style={{width:"32%"}}>
                             <div className="flex-align">
                                     <h1>{prop.cards.place}</h1>
                             </div>
                         </div>  
                     </div>
                             
                             </div>
                             
                </div>

                
               
    
    )
}
export default SubSection2