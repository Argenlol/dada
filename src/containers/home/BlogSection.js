import React, { Component } from 'react';
import { Container, Row, Card, } from 'react-bootstrap';


export default class BlogSection extends Component {
    render() {
        return (
            <>
                <Container style={{
                    backgroundImage: "#263238", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", height: 350
                }}>
                    <Row>
                        <Card>
                            <Card.Body >
                                <h4 style={{ padding: 60, color: "black" }}>As professional travel consultants, we use our years of experience, knowledge, expertise, and relationships in planning vacations/celebrations for our clients. This includes research, recommendations, reservations, and payment plans.
                                    For the service fee, we will provide you with the following:
                                    <br />
                                    <ul>
                                        <li>Research for up to three (3) destinations</li>
                                        <li>Make all necessary travel arrangements</li>
                                        <li>Set-up payment arrangements per the Vendor/Supplier/Tour Operator terms</li>
                                        <li>Collect payments and forward to the Vendor/Supplier/Tour Operator</li>
                                        <li>Invoice and email receipts</li>
                                        <li>Stay in close communication regarding reservation</li>
                                        <li>Peace of mind</li>
                                        <li>Plus, much more!</li>
                                    </ul>
                                </h4>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        );
    };
};