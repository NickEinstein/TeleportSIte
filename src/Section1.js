import React from 'react'
// import './custom1.css'
import GroupedImages from './GroupedImages';
import PictureCard from './PictureCard';
import {Card} from "antd"
import 'antd/dist/antd.css';
import {section1Small1, section1Small2, section1Big} from './Arrays'

function Section1(prop){
    const cards = section1Big.map(item => <div className=""><PictureCard card = {item}/> </div> )

    return(
        <div className = "section1">
                <div>
                    <h3>Get inspired for a family tour</h3>
                    <p>Fully planned tours with tour-guides, convinence and amenities</p>
                </div>
                <div className="boxes">
                         {/* <div className=" picsMath">{cards}</div> */}
                         <div className=" picsMath">
                             
                             <div><GroupedImages image = "./images/lekki.png" height="425px" width="425px"/></div>
                         
                         </div>
                   
                    <div className="picsMath flex-space">
                        <div className=" picsMath">
                            <div><GroupedImages image = "./images/lekki.png" height="200px" width="200px"/></div>
                            <div className="marginTop20"><GroupedImages image = "./images/lekki.png" height="200px" width="200px"/></div>  
                        </div>
                        <div className="smallBox2 picsMath">
                            <div><GroupedImages image = "./images/lekki.png" height="200px" width="200px"/></div>
                            <div className="marginTop20" ><GroupedImages image = "./images/lekki.png" height="200px" width="200px"/></div>
                        </div>
                    </div>
                </div>

                
                <div>
                    <p>See more</p>
                    <img src ="" alt="" />
                </div>
        </div>
    )
}
export default Section1