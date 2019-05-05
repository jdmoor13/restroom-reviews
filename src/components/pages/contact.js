import React, { Component } from 'react';
import { Mask, Row, Col, Button, View, Container, Card, CardBody, Input } from 'mdbreact';

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <View>
                    <Mask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
                        <Container>
                            <Row>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 pt-5">
                                    <h1 className="pt-5 display-4 font-weight-bold">Contact us</h1>
                                </div>
                                <Col md="6" xl="5" className="mb-4">
                                    <Card className="dark-grey-text">
                                        <CardBody className="z-depth-2">
                                            <form action="/.netlify/functions/email" method="POST" target="hiddenFrame" name="contactForm" id="contactForm">
                                                <h3 className="dark-grey-text text-center"><strong>Write to us:</strong></h3>
                                                <hr/>
                                                <Input label="Your name" icon="user" name="name" id="name"/>
                                                <Input label="Your email" icon="envelope" name="email" id="email"/>
                                                <Input label="Your message" icon="pencil" name="message" id="message" type="textarea" rows="3"/>
                                                <div className="text-center mt-3 black-text">
                                                    <Button color="indigo" onClick={() => {
                                                        document.getElementById("contactForm").submit();
                                                        document.getElementById("name").value = "";
                                                        document.getElementById("email").value = "";
                                                        document.getElementById("message").value = "";
                                                    }}>Send</Button>
                                                </div>
                                                <iframe name="hiddenFrame" width="0" height="0" style={{display: "none"}}/>
                                            </form>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Mask>
                </View>
            </div>
        )
    }
}

export default Contact;