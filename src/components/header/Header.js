import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Header.css'
import { Link } from 'react-router-dom';
import { BiUserCircle} from 'react-icons/bi';
import { Badge, Dropdown, Nav } from 'react-bootstrap';
import { FaShoppingCart} from 'react-icons/fa';
import AuthDetail from '../auth/AuthDetail';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>
    <div  className='first-section'>
        <div className='first-section-row'>
            <Link to='/' className='link-header '>My Store Project</Link>
            <div className=' d-flex align-items-center '>
            <Nav>
            <Dropdown >
                <Dropdown.Toggle variant='black' bc='black' >
                     <BiUserCircle color='white' fontSize='25px' />  
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 , backgroundColor:'black', color:'white', border:'2px solid white'}}>
                  <AuthDetail />
            </Dropdown.Menu>

            </Dropdown>
        </Nav>
            </div>
        </div>
    </div>
    <Container fluid className='second-section'>
      
      <Row className='second-row'>
    
        <Col className='navigation'>
        <button className='hamburger'
        onClick={ () => setIsNavExpanded( ( n ) => !n ) }>
        {/* icon from heroicons.com */ }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }
      >
          <ul>
          <li
            onClick={ () => setIsNavExpanded( ( n ) => !n ) }
          >
          <Link to='/'       className='link-header'>Home</Link>
          </li>
          <li
            onClick={ () => setIsNavExpanded( ( n ) => !n ) }
          >
          <Link to='/about'  className='link-header'>About</Link>
          </li>
          <li
            onClick={ () => setIsNavExpanded( ( n ) => !n ) }
          >
          <Link to='/contact'className='link-header'>Contact</Link>
          </li>
          </ul>
      </div>
        </Col>
        
        <Col className='col2-link'>
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </Col>
        <Col className='col3-link'>
        <Nav>
        <Dropdown>
            <Dropdown.Toggle variant='black' bc='black'  >
                <FaShoppingCart color='white' fontSize='25px'/>
                  
                <Badge bg="light" text="dark" style={{marginLeft:'10px', paddingBottom:'8px'}}>5</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 , backgroundColor:'black', color:'white', border:'2px solid white'}}>
              ciao
        </Dropdown.Menu>

        </Dropdown>
    </Nav>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Header