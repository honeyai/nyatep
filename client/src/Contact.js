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
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              Region 2
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              Region 3
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">
              Region 4
            </AccordionHeader>
            <AccordionBody accordionId="4">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">
              Region 5
            </AccordionHeader>
            <AccordionBody accordionId="5">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">
              Region 6
            </AccordionHeader>
            <AccordionBody accordionId="6">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">
              Region 7
            </AccordionHeader>
            <AccordionBody accordionId="7">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="8">
              Region 8
            </AccordionHeader>
            <AccordionBody accordionId="8">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="9">
              Region 1
            </AccordionHeader>
            <AccordionBody accordionId="9">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="10">
              Region 10
            </AccordionHeader>
            <AccordionBody accordionId="10">
              <div className="contact__contactinfo">
                <span className="contact__worksite">Livingston County Workforce Development</span>
                <span className="contact__nameAndEmail">Mary Guldenschuh: mguldenschuh@co.livingston.ny.us</span>
                <span className="contact__phoneNumber">5852437047</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">YMCA of Greater Rochester</span>
                <span className="contact__nameAndEmail">Jakob Elder: jakob.elder@rochesterymca.org</span>
                <span className="contact__phoneNumber">5858029862</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Orleans County Job Development</span>
                <span className="contact__nameAndEmail">Peter Anderson: peter.anderson@orleanscountyny.gov</span>
                <span className="contact__phoneNumber">5855892822</span>
              </div>
              <div className="contact__contactinfo">
                <span className="contact__worksite">Yates County Workforce Development</span>
                <span className="contact__nameAndEmail">Christine Yonge: christine.yonge@dfa.state.ny.us</span>
                <span className="contact__phoneNumber">3155365140</span>
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