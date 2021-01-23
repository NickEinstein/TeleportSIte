import React from 'react'

import Header from './Header';
import Section1 from './Section1';
import Nav_tab from './Nav_tab';



function LandingPage(props){
    return(
        <div class="">
            <Nav_tab/>
          <Header  Url = "Url(./images/MaskGroup1.png)"/>
          <Section1/>
        </div>
    )
}
export default LandingPage