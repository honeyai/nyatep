import React from "react";
import { contactInfo } from "./AllContacts.js";
import Accordion from "./Accordion/Accordion.js";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact__regionAccordions">
        <Accordion title="Testing" text={`${contactInfo[0].Region}`} />
      </div>
    </div>
  );
};

export default Contact;
