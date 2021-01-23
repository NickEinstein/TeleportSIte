import React from 'react'
import {Card} from "antd"
import 'antd/dist/antd.css';

function GroupedImages(prop){
 
return(
  
<div class="grouped_images">
    <Card  
    cover = {<img src= {prop.image} alt = {prop.alt} style={{borderRadius:prop.radius, width:prop.width, height:prop.height, color:"blue"}}/>}
  style={{border:prop.border,}}
    >
    </Card>
</div>
)
}
export default GroupedImages