import React from 'react'
function Header_Text(prop){

    return(
        <div className = "header__text">
    <h5>{prop.headerText}</h5>
    <p>{prop.p}</p>
        </div>
    )
}
export default Header_Text