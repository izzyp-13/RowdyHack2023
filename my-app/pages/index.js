import Head from 'next/head';
import Image from 'next/image';
import astronomy from '../public/image/download.jpg'
import cave from '../public/image/caves.jpg'
import ocean from '../public/image/ocean.jpg'
import forest from '/public/image/forest.jpg'
import Dropdown from 'react-bootstrap/Dropdown'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
      <Head>
        <title>No Unknown</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
       <h1>No Unknown</h1>

       <Row className='pt-4 px-4'>
                <Col xs = {3}>
                    <Card style={{  }}>             
                    <Image src={astronomy} width={300} height={150} />
                    <Card.Body style={{width: '18rem', height: '8rem'}}>
                    <Card.Title style={{fontSize: '2rem'}}>Learn about space</Card.Title>
                    <Card.Text>
                        You think you know space?
                    </Card.Text>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Play
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Start game</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs = {3}>
                    <Card style={{ }}>             
                    <Image src={forest} width={300} height={150}/>
                    <Card.Body style={{width: '18rem', height: '8rem'}}>
                    <Card.Title>Learn about space</Card.Title>
                    <Card.Text>
                        Try some trivia about forests.
                    </Card.Text>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Play
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Start game</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs = {3}>
                <Card style={{  }}>
                <Image src={ocean} width={300} height={150} />
                    <Card.Body style={{width: '18rem', height: '8rem'}}>
                    <Card.Title>Learn about the ocean</Card.Title>
                    <Card.Text>
                        Try some trivia about the ocean.
                    </Card.Text>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Choose your difficulty
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Hard</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs = {3}>
                <Card style={{  }}>
                <Image src={cave} width={300} height={150}/>
                
                    <Card.Body style={{width: '18rem', height: '8rem'}}>
                    <Card.Title>Learn about caves</Card.Title>
                    <Card.Text>
                        How much do you know about caves?
                    </Card.Text>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Play
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Start game</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

      </main>
    </>
  )
}
