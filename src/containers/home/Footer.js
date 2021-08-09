import { Container } from '@material-ui/core';
import React from 'react';


const Footer = () => {
    return (

        <Container fluid style={{
            backgroundColor: '#3d5afe', color: '#fafafa', size: "10px", maxWidth: "max"
        }}>
            <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <p> Weclome to TRAVEL & TOUR</p>
                <p></p>
            </Container>
        </Container>

    )
};

export default Footer;