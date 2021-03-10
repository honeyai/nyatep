import React, { useState } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./PlaceHolderPages/ContactUs.js";
import Regions from "./PlaceHolderPages/Regions.js";
import YearlyLinkSwitch from "./YearlyLinkSwitch.js";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Navibar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="sticky-top">
      <Router>
        <Nav tabs sticky="top">
          <NavItem>
            <NavLink activeClassName="active" tag={RRNavLink} exact to="/">
              Home
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Regions
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <Link
                  activeClassName="active"
                  tag={RRNavLink}
                  to="/regions1"
                >
                  Region 1
                </Link>
              </DropdownItem>
              <DropdownItem header>
                <Link
                  activeClassName="active"
                  tag={RRNavLink}
                  to="/regions2"
                >
                  Region 1
                </Link>
              </DropdownItem>
              <DropdownItem header>
                <Link
                  activeClassName="active"
                  tag={RRNavLink}
                  to="/regions3"
                >
                  Region 1
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link activeClassName="active" tag={RRNavLink} to="/regions">
                  Regions
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink activeClassName="active" tag={RRNavLink} to="/contact">
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>

        <Switch>
          <Route exact path="/" component={Regions} />
          <Route path="/regions" component={YearlyLinkSwitch} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
};

export default Navibar;
