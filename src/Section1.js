import React from 'react'
// import './custom1.css'
import SubSection1 from './SubSection1';
import PictureCard from './PictureCard';
import {Card, Button} from "antd"
import 'antd/dist/antd.css';
import {section1Small1, section1Small2, flightDeals} from './Arrays'

function Section1(prop){
    const Url = prop.Url

    const header_Background = {
    backgroundImage: Url,
    backgroundSize: "cover",
    // width:"49%",
    // height:"300px",
   
    
    }

    const cards = flightDeals.map(item => <div style={{width:"100%"}}><SubSection1 cards = {item}/> </div> )

    return(
        <div className = "section1">
                <div>
                    <h3 style={{color:"#191970"}}>Best flight deals</h3>
                   
                </div>
                <div className="flex-space">
                         {/* <div className=" picsMath">{cards}</div> */}
                        {/* <SubSection1 cards = {flightDeals[0]}/>
     */}
     {cards}
                </div>

                
               
        </div>
    )
}
export default Section1