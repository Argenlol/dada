import { Container } from '@material-ui/core';
import React from 'react';


const Footer = () => {
    return(
        <Container fluid style={{
            backgroundColor: '#f57c00', color: '#fafafa', size:"10px" }}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <p> Weclome to Travel & Tour</p>
            <p></p>
        </Container>
    </Container>
    )
};

export default Footer;



