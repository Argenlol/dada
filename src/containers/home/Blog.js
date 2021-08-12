import React, { Component } from 'react';
import { Container, Row, Card, } from 'react-bootstrap';


export default class Blog extends Component {
    render() {
        return (
            <Container style={{ backgroundImage: "url(https://www.thesavvyglobetrotter.com/wp-content/uploads/2018/05/Best-Travel-Quotes.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", marginTop: 20 }}>
                <Row>
                    <Card>
                        <Card.Body >
                            <h5 style={{ color: "white" }}>Quotes About Travel </h5>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    };
};