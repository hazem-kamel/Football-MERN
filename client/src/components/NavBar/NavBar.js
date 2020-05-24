import React, { useState, useEffect } from "react";
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Button from "reactstrap/lib/Button";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {}, [sessionStorage]);
  const toggle = () => setIsOpen(!isOpen);
  let storedSession = sessionStorage.getItem("storedSession");
  const logout = () => {
    sessionStorage.clear();
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kingfut</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Leagues
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>English Premier Leauge </DropdownItem>
                <DropdownItem>Spanish La Liga </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Italian Serie A</DropdownItem>
                <DropdownItem>German Buendes Leauge</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {!storedSession ? (
              <>
                <NavItem>
                  <Button href="/login">Sign In</Button>
                </NavItem>
                <NavItem>
                  <Button href="/register">Sign Up</Button>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink>{storedSession}</NavLink>
                </NavItem>
                <NavItem>
                  <Button onClick={(e) => logout()}>log out</Button>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
