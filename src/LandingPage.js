import React from 'react'

import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Carousels from "./Carousels"
import Nav_tab from './Nav_tab';



function LandingPage(props){
    return(
        <div class="">
            <Nav_tab/>
          <Header  Url = "Url(./images/MaskGroup1.png)"/>
          <div className="sectionHolder">
              <Section1  Url = "Url(./images/MaskGroup1.png)"/>
              <Section2 Url = "Url(./images/MaskGroup1.png)"/>
              {/* <Section3/> */}
        </div>
              <Section4/>
              {/* <Carousels/> */}
              <div className="sectionHolder">
                  <Section5/>
                  <Section6/>
              </div>
          
        </div>
    )
}
export default LandingPage