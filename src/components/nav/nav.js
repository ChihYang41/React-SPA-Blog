import React from 'react';
import './nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavTitle from './NavTitle';
import NavItem from './NavItem';

function BlogNavbar() {
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <NavTitle/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem text="Home" to="/" exact={true}>Home</NavItem>
          <NavItem text="Posts" to="/posts">Posts</NavItem>
          <NavItem text="Write a post" to="/newPost">Write a post</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BlogNavbar;