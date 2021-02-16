import React from 'react'
import Carousels from "./Carousels"
import {carousels1} from './Arrays'
import CarouselCards from './CarouselCards';
import 'antd/dist/antd.css';

function Section4(prop){

    const cards = carousels1.map(item => <CarouselCards card = {item}/> )

    // const contentStyle = {
    //     height: '160px',
    //     width:"300px",
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //   };

    return(
        <div className = "section4">
                <div style={{color:"white", width:"35%",}}>
                <h3 style={{color:"white"}}>Check out these luxurious places</h3>
                <p style={{color:"white"}}>
                Fully planned tours with tour-guides, convinence and amenities
                </p>
                </div>

               <div className="flex-space" style={{marginTop:"20px"}}>
                        <div style={{ width:"35%",}}>
                            <h1 style={{color:"white", fontSize:"1em", fontWeight:"bold"}}>Changes with slider</h1>
                            <p style={{color:"white"}}>
                                Authentic Mexican style meets modern luxury in the Ocean View Deluxe 2 Queen Bed Room - Plunge Pool accommodations at Waldorf Astoria Los Cabos Pedregal. Each features a private terrace with a plunge pool, a spacious sitting area with natural sunlight and a fireplace.
                            </p>
                        </div>

              
                     
                        <div style={{height:"400px", width:"63%"}}>
                            <Carousels card ={cards} />
                        </div>
                  
                </div>

                
               
        </div>
    )
}
export default Section4