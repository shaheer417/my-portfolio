import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0F2027]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
        {/* Contact Information */}
        <div>
          <span className="xl:mx-auto">
            <ContactInfo />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
