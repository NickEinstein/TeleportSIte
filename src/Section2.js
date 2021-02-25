import React from 'react'
import SubSection2 from './SubSection2';
import {Card, Button} from "antd"
import 'antd/dist/antd.css';
import {section1Small1, section1Small2, recommendedDestinations} from './Arrays'

function Section2(prop){
    const cards = recommendedDestinations.map(item => <div style={{width:"32%"}}><SubSection2 cards = {item}/> </div> )


        const Url = prop.Url

        const header_Background = {
        backgroundImage: Url,
        backgroundSize: "100% 100%",
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
             {cards}
               
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