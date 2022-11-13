import React from "react";
import "./style/sidebar_style.css"
import Hero from "./Hero";

const Sidebar=()=>{
    return(
        <div>
            <input type="checkbox" id="ham-menu"/>
<label for="ham-menu">
  <div class="hide-des">
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
  </div>

</label>
<div class="full-page-green"></div>
<div class="ham-menu">
  <ul class="centre-text bold-text">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Experience</li>
    <li>Timeline</li>
    <li>Contact</li>

  </ul>
</div>
        </div>
    )
}

export default Sidebar