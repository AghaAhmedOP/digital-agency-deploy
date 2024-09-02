import React from "react";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="py-[120px]" id="contact">
      <div>
        <SectionHeader
          subHeading={"contact"}
          heading={"Have a Project in Mind?"}
          paragraph={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          classname={"items-center text-center"}
          pclassname={"!text-base !font-medium"}
        />
      </div>

      <div className="-mx-4 flex justify-center mt-20">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
