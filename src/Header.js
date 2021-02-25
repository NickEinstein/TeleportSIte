
import React from 'react'
import Nav_tab from './Nav_tab';
import Header_Text from './Header_Text';
import Carousel from './Carousels';



function Header(prop){

    const Url = prop.Url.image

const header_Background = {
backgroundImage: Url,
backgroundRepeat: "no-repeat",
backgroundSize: "100% 100%"


}
    return(
        <header className="header" style = {header_Background} >
      
        <section className = "body__of_header">
        <Header_Text
        headerText = "Best Trips to suite your budget"
        p ="Explore the world. School abroad."
        />
        </section>
      
     </header>
     
    )
  }
  export default Header