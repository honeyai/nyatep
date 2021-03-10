import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Contact = () => {
  const [openId, setOpenId] = useState();
  const toggle = id => {
    openId === id ? setOpenId(undefined) : setOpenId(id);
  };

  return (
    <div>
      <div className="contact__regionAccordions">
        <Accordion openId={openId} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">
              Region 1
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <Form>
        <FormGroup>

        </FormGroup>
      </Form> */}
    </div>
  );
};

export default Contact;