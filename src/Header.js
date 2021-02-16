
import React from 'react'
import Nav_tab from './Nav_tab';
import Header_Text from './Header_Text';
import Carousel from './Carousels';



function Header(prop){

    const Url = prop.Url

const header_Background = {
backgroundImage: Url,
backgroundSize: "cover"

}
    return(
        <header className="header" style = {header_Background} >
      
        <section className = "body__of_header">
        <Header_Text
        headerText = "Best homes to suite your style"
        p ="Explore the world. School abroad."
        />
        </section>
      
     </header>
     
    )
  }
  export default Header