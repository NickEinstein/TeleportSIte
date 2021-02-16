import React from 'react'
import GroupedImages from './GroupedImages';
import {Card, Button} from "antd"
import 'antd/dist/antd.css';
import {section1Small1, section1Small2, section1Big} from './Arrays'

function Section2(prop){
        const Url = prop.Url

        const header_Background = {
        backgroundImage: Url,
        backgroundSize: "cover",
        width:"32%",
        height:"250px",
        // border:"2px solid red",
        marginBottom:"20px"
        
        }
    
    return(
        <div className = "section2">
        <div>
            <h3>Recommended destinations</h3>
        </div>
        <div className="flex-space" style={{flexWrap:"wrap"}}>
                 {/* <div className=" picsMath">{cards}</div> */}
                 <div className="check"  style = {header_Background}>
                     
                 <div style={{width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                     <div style={{width:"32%"}}>
                         <div className="flex-align">
                                 <h1>New York</h1>
                         </div>
                     </div>  
                 </div>
                 
                 </div>
                 <div className="check"  style = {header_Background}>
                     
                     <div style={{width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                         <div style={{width:"32%"}}>
                             <div className="flex-align">
                                     <h1>New York</h1>
                             </div>
                         </div>  
                     </div>
                     
                     </div>

                     <div className="check"  style = {header_Background}>
                     
                     <div style={{width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                         <div style={{width:"32%"}}>
                             <div className="flex-align">
                                     <h1>New York</h1>
                             </div>
                         </div>  
                     </div>
                     
                     </div>

                     <div className="check"  style = {header_Background}>
                     
                     <div style={{width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                         <div style={{width:"32%"}}>
                             <div className="flex-align">
                                     <h1>New York</h1>
                             </div>
                         </div>  
                     </div>
                     
                     </div>

                     <div className="check"  style = {header_Background}>
                     
                     <div style={{width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                         <div style={{width:"32%"}}>
                             <div className="flex-align">
                                     <h1>New York</h1>
                             </div>
                         </div>  
                     </div>
                     
                     </div>

                     <div className="check"  style = {header_Background}>
                     
                     <div style={{width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                         <div style={{width:"32%"}}>
                             <div className="flex-align">
                                     <h1>New York</h1>
                             </div>
                         </div>  
                     </div>
                     
                     </div> 
        </div>
       
                <div className="flex">
                        <a href="" className="flex showMore" style={{width:"", alignItems:"center", fontSize:"10px", marginTop:"-10px"}}>
                                <p>Show more</p>
                                <img src ="./images/Arrow1.svg" width="15"/>
                        </a>
                </div>
              
</div>
    )
}
export default Section2