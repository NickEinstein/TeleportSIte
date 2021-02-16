import React from 'react'
// import './custom1.css'
import GroupedImages from './GroupedImages';
import PictureCard from './PictureCard';
import {Card, Button} from "antd"
import 'antd/dist/antd.css';
import {section1Small1, section1Small2, section1Big} from './Arrays'

function Section1(prop){
    const Url = prop.Url

    const header_Background = {
    backgroundImage: Url,
    backgroundSize: "cover",
    width:"49%",
    height:"300px",
   
    
    }

    // const cards = section1Big.map(item => <div className=""><PictureCard card = {item}/> </div> )

    return(
        <div className = "section1">
                <div>
                    <h3 style={{color:"#191970"}}>Best flight deals</h3>
                   
                </div>
                <div className="flex-space">
                         {/* <div className=" picsMath">{cards}</div> */}
                         <div className="check"  style = {header_Background}>
                             
                         <div style={{ width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                             <div style={{  width:"33.5%"}}>
                                 <div className="flex-align">
                                     <p >Lagos</p>
                                         <img src ="./images/Arrow2.svg" width="20px"/>
                                         <h1>New York</h1>
                                 </div>
                                 <p className="check_date">12th Feb - 21st Feb</p>
                             </div>
                             <div> <Button style={{fontWeight:"bold",}}>Price(₦299,016)</Button></div>
                              
                         </div>
                             {/* <div><GroupedImages image = "./images/lekki.png" height="425px" width="425px"/></div> */}
                         
                         </div>

                         <div className="check"  style = {header_Background}>
                             
                             <div style={{ width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                                 <div style={{ width:"33.5%"}}>
                                     <div className="flex-align">
                                         <p >Lagos</p>
                                             <img src ="./images/Arrow2.svg" width="20px"/>
                                             <h1>New York</h1>
                                     </div>
                                     <p className="check_date">12th Feb - 21st Feb</p>
                                 </div>
                                 <div> <Button style={{fontWeight:"bold",}}>Price(₦299,016)</Button></div>
                                  
                             </div>
                                 {/* <div><GroupedImages image = "./images/lekki.png" height="425px" width="425px"/></div> */}
                             
                             </div>
    

                       
                             
                              {/* <div className="check"  style = {header_Background}>
                             
                         <div style={{ border:"2px solid green", width:"100%", alignItems:"center", padding:"0 15px"}} className="flex-space">
                             <div style={{ border:"2px solid red", width:"32%"}}>
                                 <div className="flex-align">
                                     <p >Lagos</p>
                                         <img src ="./images/Arrow2.svg"/>
                                         <h1>New York</h1>
                                 </div>
                                 <p className="check_date">date</p>
                             </div>
                             <div> <Button style={{fontWeight:"bold",}}>Price(₦299,016)</Button></div>
                              
                         </div>
                          
                         
                         </div> */}
                        
                   
                    
                       
                   
                </div>

                
               
        </div>
    )
}
export default Section1