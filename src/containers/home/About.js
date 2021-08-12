import React from 'react';
import { Card } from 'react-bootstrap';
import photo from '../img/photo.jpg'
import photo1 from '../img/photo1.jpg'
import photo3 from '../img/photo3.JPG'
import priroda from '../img/priroda.mp4'


const About = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around" }} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo} width="300" height="400" />
                    <Card.Body>
                        <Card.Title>AITALIEV ROLAN CO-FOUNDER</Card.Title>
                        <Card.Text>
                            WAS BORN: 11.04.1988
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ objectFit: "contain", background: "#000" }} variant="top" src={photo3} width="300" height="400" />
                    <Card.Body>
                        <Card.Title>ASKAT DOVUT FOUNDER</Card.Title>
                        <Card.Text>
                            WAS BORN: TOP SECRECT
                        </Card.Text>
                    </Card.Body>
                </Card>



                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo1} width="300" height="400" />
                    <Card.Body>
                        <Card.Title>SHABDANOV ARGEN CO-FOUNDER</Card.Title>
                        <Card.Text>
                            WAS BORN: 06.11.2000
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card className="bg-dark text-white">
                    <video width="800" height="500" controls="center" poster='https://wikipet.ru/wp-content/uploads/2017-09/1505830301_img_4452-web.jpg'>
                        <source src={priroda}/>
                    </video>
                    <Card.ImgOverlay>
                        <Card.Title>NASH KYRGYZSTAN</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    );
};

export default About;