import React from "react";
import "./style/style.css";

const Contact = () =>{
    return (
        <div>
            <section class="contact" id="contact">

        <h2 class="heading"> contact <span> me </span> </h2>

<div class="icons-container">

    <div class="icons">
        <i class="fas fa-envelope"></i>
        <h3>email</h3>
        <p>dhawansolanki2103@gmail.com</p>
        
    </div>

    <div class="icons">
        <i class="fas fa-phone"></i>
        <h3>number</h3>
        <p>Not Available</p>
        
    </div>

    <div class="icons">
        <i class="fas fa-map-marker-alt"></i>
        <h3>address</h3>
        <p>Bengaluru, Karnataka, India.</p>
    </div>

</div>

<div class="row">

    <form action="" method="POST">

        <input type="text" name="name *" placeholder="name" class="box" required/>
        <input type="email" name="email" placeholder="email" class="box" required/>
        <input type="number"  name="phone" placeholder="number" class="box" required/>

        <textarea name="message" placeholder="message" id="" cols="30" rows="10" required></textarea>
        <button type="submit" name="submit" class="btn">Send Message</button>

    </form>

    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.66007352626!2d77.35073332232041!3d12.954517011823553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645336513230!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

</div>


</section>
        </div>
    )

}
export default Contact