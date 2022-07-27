import React, { useState } from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap'

import { Link, routes } from '@redwoodjs/router'

const BlogNavbar = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      {/* <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <Navbar {...args} color="primary" full expand="lg">
        <NavbarBrand href="/">Redwood Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link
                  to={routes.home()}
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to={routes.about()}
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to={routes.contact()}
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Breno</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default BlogNavbar
