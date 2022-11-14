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
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#service">Services</a></li>
    <li><a href="#timeline">Timeline</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>

  </ul>
</div>
        </div>
    )
}

export default Sidebar