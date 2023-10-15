import './HomePage.css'
import { Container } from 'react-bootstrap';
import { Card, Row, Col, Button, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const img_src1 = 'https://images.pexels.com/photos/6664045/pexels-photo-6664045.jpeg'
const img_src2 = 'https://images.pexels.com/photos/3230236/pexels-photo-3230236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

const HomePage = () => {
    return (
        <Container>

            <Card text="center">

                <Card.Body>
                    <Card.Title>Special treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer text="muted">a slow weekend <br /><br />
                    {/* <Button className='btn'>Contact</Button> */}
                </Card.Footer>

            </Card>
            <br />

            <Row className='segDiv'>
                <Col col="sm-8" className='segDiv-1'>The magic of the stone
                    <Figure>
                        <Figure.Image src={img_src1} />
                    </Figure>
                </Col>
                <Col col="sm-4" className='segDiv-2'>
                    <Figure>
                        <Figure.Image src={img_src2} />
                        <Figure.Caption>Fingers relieve your fatigue</Figure.Caption>
                    </Figure>


                </Col>
            </Row>

            <br />

            <Card text="center" className='footMesaje'>
                <Card.Body>
                    <Card.Title>Feet Masaje </Card.Title>
                    <Card.Text>
                        Relieve the fatigue of your feet
                    </Card.Text>
                </Card.Body>

                <Card.Footer text="muted"><br /> Enjoy the moment<br /><br />
                    <Link to="/footmasaje"> <Button className='btn'>More details

                    </Button></Link>
                </Card.Footer>
            </Card>
            <br />

            <Card text="center" className='curpoMesaje'>
                <Card.Body>
                    <Card.Title>body massage </Card.Title>
                    <Card.Text>
                        Aches and pains accumulated during daily work
                    </Card.Text>
                </Card.Body>

                <Card.Footer text="muted"><br /> time to relax<br /><br />
                    <Link to="/bodymasaje"> <Button className='btn'>More details

                    </Button></Link>

                </Card.Footer>
            </Card>
        </Container>
    );
}

export default HomePage;