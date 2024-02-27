
import React, { useEffect } from 'react';
import '../styles/web4.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  useEffect(() => {
    const handleNavbarClick = (event) => {
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(link => {
      link.addEventListener('click', handleNavbarClick);
    });

    return () => {
      navbarLinks.forEach(link => {
        link.removeEventListener('click', handleNavbarClick);
      });
    };
  }, []);

  return (
    <div className='container-fluid bgs'>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand className="brandLogo" href="#" style={{ color: "white" }}>Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav>
              <Nav.Link href="#trending" className="nav-link">Trending</Nav.Link>
              <Nav.Link href="#topGames" className="nav-link">Top Games</Nav.Link>
              <Nav.Link href="#categories" className="nav-link">Categories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
