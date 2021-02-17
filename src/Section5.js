import React from 'react'
import {Card, Button} from "antd"
import 'antd/dist/antd.css';
function Section5(prop){

    return(
        <div className = "section5">
                <div className="section5_content flex-align">
                    <div style={{width:"50%"}}>
                    <h2 style={{marginBottom:"10px"}}>24/7 Customer support</h2>
                    <p>
                    Our team of expierenced tour specialists have travelled to hundreds of countries around the globe and have decades of first-hand travel experience to share
    contact us now to have all of your tour-related questions answered 
                    </p>
                    <Button 
                style={{backgroundColor:"#020202", 
                borderTopRightRadius:"10px",
                borderTopLeftRadius:"10px",
                borderBottomLeftRadius:"10px",
                color:"white",
                marginTop:"10px"
                
                }}>
                    Subscribe
                    </Button>
                    </div>
    
                   <div className=" circleHolder flex">
                   
                    <div className="circles circle1"></div>
                    <div className="circles circle2"></div>
                    <div className="circles circle3"></div>
                    <div className="circles circle4"></div>
                  
                    
                   </div>
                </div>
               

                
               
        </div>
    )
}
export default Section5