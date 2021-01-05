import React from 'react'
import logo from './commons/images/icon.png';

import {
    Button, Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';
import Redirect from "react-router-dom/Redirect";

const textStyle = {
    color: 'white',
    textDecoration: 'none'
};

const NavigationBar = () => (

    <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand href="/doctor">
                <img src={logo} width={"50"}
                     height={"35"} />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={textStyle} nav caret>
                       Menu
                    </DropdownToggle>
                    <DropdownMenu right >

                        <DropdownItem>
                            <NavLink href="/doctor/patient">Patients</NavLink>
                        </DropdownItem>

                        <DropdownItem>
                            <NavLink href="/doctor/medication">Medications</NavLink>
                        </DropdownItem>

                        <DropdownItem>
                            <NavLink href="/doctor/caregiver">Caregivers</NavLink>
                        </DropdownItem>

                    </DropdownMenu>

                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    </div>
);

export default NavigationBar
