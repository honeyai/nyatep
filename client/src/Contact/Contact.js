import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  // const ExpandedIcon = <FontAwesomeIcon icon={faChevronDown}/>
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  }
  return (
    <div>
      <div className="contact__regionAccordions">
        {/* {ExpandedIcon} */}
        <Card onClick={toggle}>
          REGION
          <Collapse isOpen={isOpen} >
            <Card>
              <CardBody>ASHDFAsdfas</CardBody>
            </Card>
          </Collapse>
        </Card>
        <Card onClick={toggle}>
          REGION2342342
          <Collapse isOpen={isOpen} >
            <Card>
              <CardBody>ASHDFAsdfas</CardBody>
            </Card>
          </Collapse>
        </Card>
        <Card onClick={toggle}>
          REGION234
          <Collapse isOpen={isOpen} >
            <Card>
              <CardBody>ASHDFAsdfas</CardBody>
            </Card>
          </Collapse>
        </Card>
        <Card onClick={toggle}>
          REGION23456
          <Collapse isOpen={isOpen} >
            <Card>
              <CardBody>ASHDFAsdfas</CardBody>
            </Card>
          </Collapse>
        </Card>
      </div>
      {/* <Form>
        <FormGroup>

        </FormGroup>
      </Form> */}
    </div>
  );
};

export default Contact;
