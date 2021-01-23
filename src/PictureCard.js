import React from "react"
import {Card, Upload,Button, Select} from 'antd';
import 'antd/dist/antd.css';
import './antd.css'

function PictureCard(prop){

    const { Meta } = Card;
return(

    <>
    <Card
    hoverable
    style={{ border: "none",}}
    cover={<img alt="example" src={prop.card.image} style={{height:prop.card.height, width:prop.card.width}}/>}
  >
   {/* <h2 style={{fontSize:"0.8em", display: prop.card.name? "block":"none"}}>{prop.card.name}</h2>

   <div style={{display:"flex", fontSize:"0.6em",alignItems:"center",display: (prop.card.houseType||prop.card.place)? "flex":"none"}}>
     <p > {prop.card.place}</p>
      <li style={{opacity:"0.4", marginLeft:"20px", listStyleType:"initial" }}>{prop.card.houseType} </li>
   </div>

    <ul className="flex-between" style={{listStyle:"none", marginTop:"10px",marginBottom:"5px", display: (prop.card.name||prop.card.status)? "flex":"none"}}>
      <li style={{fontSize:"0.8em", color:"#477998",  display: prop.card.name? "block":"none"}}>{prop.card.Price}</li>
      <Button size="small" style={{fontSize:"0.6em",height:"17px", color:"#1DC9B7", padding:"0 15px", backgroundColor:"#E0FDEA",display: prop.card.status? "block":"none"}}>{prop.card.status}</Button>
    </ul> */}
  </Card>,
    </>


)
}
export default PictureCard