
import React from 'react'
import Nav_tab from './Nav_tab';
import Header_Text from './Header_Text';
import { Carousel, Button } from 'antd';
import 'antd/dist/antd.css';


function Carousels(prop){

   function onChange(a, b, c) {
      console.log(a, b, c);
    }
    
    // const contentStyle = {
      
  
    //   color: '#fff',
    //   lineHeight: '160px',
    //   textAlign: 'center',
    //   background: '#364d79',
    // };

    const Url = prop.card.image

    const header_Background = {
      backgroundImage: Url,
      backgroundSize: "cover",
      width:"100%",
      height:"100%",
      border:"2px solid blue",
      marginBottom:"20px"
      
      }



    return(
       <div className="carousel" style={{   width:"100%",height: '100%',}}>
         <Carousel autoplay effect="fade">

{prop.card}

         </Carousel>
      
{/*        
         
            */}
        
       </div>
     
    )
  }
  export default Carousels