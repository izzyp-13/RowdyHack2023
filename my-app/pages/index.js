import Head from 'next/head';
import Image from 'next/image';
import astronomy from '../public/image/download.jpg'
import cave from '../public/image/caves.jpg'
import ocean from '../public/image/ocean.jpg'
import forest from '/public/image/forest.jpg'

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


const cardStyle = {
  width: '18rem',
  height: '500px',
  backgroundcolor: '#F05A22'
};



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
                    <Card style={{ cardStyle }}>             
                    <Image src={astronomy} />
                    <Card.Body>
                    <Card.Title>Learn about space</Card.Title>
                    <Card.Text>
                        You think you know space?
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs = {3}>
                    <Card style={{ cardStyle }}>             
                    <Image src={forest} />
                    <Card.Body>
                    <Card.Title>Learn about space</Card.Title>
                    <Card.Text>
                        Try some trivia about forests.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs = {3}>
                <Card style={{ cardStyle }}>
                <Image src={ocean} />
                    <Card.Body>
                    <Card.Title>Learn about the ocean</Card.Title>
                    <Card.Text>
                        Try some trivia about the ocean.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs = {3}>
                <Card style={{ cardStyle }}>
                <Image src={cave} width={300} height={150}/>
                
                    <Card.Body>
                    <Card.Title>Learn about caves</Card.Title>
                    <Card.Text>
                        How much do you know about caves?
                    </Card.Text> 
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

      </main>
    </>
  )
}
