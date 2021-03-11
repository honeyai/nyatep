import React from "react";
import { contactInfo } from "./AllContacts.js";
import Accordion from "./Accordion/Accordion.js";
import "./contact.css";

const Contact = () => {

  return (
    <div>
      <div className="contact__regionAccordions">
        {contactInfo.map((item, key) => {
          return (
            <Accordion
              key={key}
              title={item.Region}
              text={item.contacts.map((item, key) => {
                return (
                  <div key={key}>
                    <div>
                      <div className="contact__contactinfo">
                        <span className="contact__worksite">
                          {item.site}
                        </span>
                        <span className="contact__nameAndEmail">
                          {item.personToContact} {<br />} {item.email}
                        </span>
                        <span className="contact__phoneNumber">
                          {item.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
