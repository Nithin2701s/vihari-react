import React from "react"
import "../components/CSS/Contact.css";
import Left from "../components/UI/Left"
import Right from "../components/UI/Right"
import Navbar from "../components/UI/Navbar";

const Contact = ()=>{
    return(
        <>
        <Navbar />
        <h1 >Contact Us</h1>
        <div className = "contactUs">         
            <Left/>
            <Right/>
        </div>
        </>
    )
}
export default Contact;