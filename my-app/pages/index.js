import Head from 'next/head';
import Image from 'next/image';
import astronomy from '../public/image/download.jpg'
import cave from '../public/image/caves.jpg'
import ocean from '../public/image/ocean.jpg'
import forest from '/public/image/forest.jpg'
import Dropdown from 'react-bootstrap/Dropdown'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ListGroup, ListGroupFlush, ListGroupItem } from 'react-bootstrap/ListGroup';

const inter = Inter({ subsets: ['cyrillic'] });


const imageStyle = {

};

export default function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Know Uknown</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <NavDropdown title="Learn More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Why we did this</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Head>
      <title>Know Unknown</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={styles.main}>
      <h1>Know Unknown</h1>

      <Row className='pt-4 px-4' id=''>
              <Col xs = {3}>
                  <Card style={{  }}>             
                  <Image src={astronomy} width={280} height={150} />
                  <Card.Body style={{width: '20rem', height: '10.25rem'}}>
                  <Card.Title style={{fontSize: 30}}>Learn about space</Card.Title>
                  <Card.Text>
                      You think you know space?
                  </Card.Text>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Play Game
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Start</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Card.Body>
                  </Card>
              </Col>

              <Col xs = {3}>
                  <Card style={{ }}>             
                  <Image src={forest} width={280} height={150}/>
                  <Card.Body style={{width: '20rem', height: '10.25rem'}}>
                  <Card.Title style={{fontSize: 30}}>Learn about forests</Card.Title>
                  <Card.Text>
                      Try some trivia about forests.
                  </Card.Text>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Play Game
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Play</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Card.Body>
                  </Card>
              </Col>

              <Col xs = {3}>
              <Card style={{  }}>
              <Image src={ocean} width={280} height={150} />
                  <Card.Body style={{width: '20rem', height: '10.25rem'}}>
                  <Card.Title style={{fontSize: 30}}>Learn about oceans</Card.Title>
                  <Card.Text>
                      Try some trivia about the ocean.
                  </Card.Text>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Play Game
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Play</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Card.Body>
                  </Card>
              </Col>

              <Col xs = {3}>
              <Card style={{  }}>
              <Image src={cave} width={280} height={150}/>
              
                  <Card.Body style={{width: '20rem', height: '10.25rem'}}>
                  <Card.Title style={{fontSize: 30}}>Learn about caves</Card.Title>
                  <Card.Text>
                      What do you know about caves?
                  </Card.Text>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Play Game
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/nextpage.js">Play</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Card.Body>
                  </Card>
              </Col>
          </Row>
          <Row>
            <Col>
            <h1 style={{color:"#FFFFFF"}}>Choose a topic to play!</h1>

            </Col>
          </Row>

      </main>
    </>
  )
}
