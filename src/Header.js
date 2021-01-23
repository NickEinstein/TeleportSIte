
import React from 'react'
import Nav_tab from './Nav_tab';
import Header_Text from './Header_Text';
import Carousel from './Carousel';



function Header(prop){

//     const Url = prop.Url

// const header_Background = {
// backgroundImage: Url,
// backgroundSize: "cover"

// }
    return(
        <header className="header" >
      
        <section className = "body__of_header" style={{display:"flex", justifyContent:"space-between"}}>
        <Header_Text
        headerText = "PARIS"
        p ="The Basilique du Sacré-Cœur is a Roman Catholic Basilica, which was built in 1914 and consecrated in 1919. It is located at the highest altitude in Paris, at butte Montmartre, itself a historically important artist colony. The church contains one of the world's largest mosaic of Jesus Christ, with his arms wide spread"
        />
      
      <Carousel/>
        </section>
        <p style={{border:"2px solid green"}}>Button(Explore)</p>
     </header>
     
    )
  }
  export default Header