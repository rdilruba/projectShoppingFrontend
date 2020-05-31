import React from 'react'
import "./Menu.scss"

function Menu() {
    return (
      <div className="menu">
          <div className="menu-button-container" style={{}}>
              <div className="menu-button"> Chocolate</div>
              <div style={{width:"20%", height:"100%"}}> Clothing</div>
              <div style={{width:"20%", height:"100%"}}> Technology</div>
              <div style={{width:"20%", height:"100%"}}> Music</div>
              <div style={{}}> Furniture</div>


          </div>
      </div>
    );
  }
  
  export default Menu;