import React from "react";
import LayoutEl from "../../Shared/Layout";
import "./ContactUs.css";
import ContactForm from "../../Elements/ContactForm";
import ContactEl from "../../Elements/ContactEl";


const ContactUs=()=>{
   
    const display=(
        
        <>
        
        <LayoutEl>
        <ContactEl/>
      <ContactForm/>
        </LayoutEl>
        </>
    )
    return display
}
export default ContactUs