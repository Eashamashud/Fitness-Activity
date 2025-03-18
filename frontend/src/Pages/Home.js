import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col, Button, Card, Navbar, Nav, NavbarToggle} from "react-bootstrap";

const Home = () => {
    return (
        <>
            {/*{ Navigation Bar }*/}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/fitness">Fitness</Nav.Link>
                            <Nav.Link href="/Workouts">Workouts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/*{ Hero Section }*/}
            {/*<section className="text-center text-white p-5" style={{ backgroundColor: "#007bff" }}>*/}
            {/*    <Container>*/}
            {/*        <h1 className="display-4 fw-bold">Welcome to my Fitness Tracker</h1>*/}
            {/*        <p className="lead">Track your workouts, set goals, and achieve your fitness dreams.</p>*/}
            {/*    </Container>*/}
            {/*    <Link to="fitness">*/}
            {/*        <Button variant="light" size="lg">Start Tracking</Button>*/}
            {/*    </Link>*/}
            {/*</section>*/}
            <section className="text-center text-white py-5" style={{backgroundColor: "#007bff"}}>
                <Container>
                    <h1 className="display-2 fw-bold">Welcome to My Fitness Tracker</h1>
                    <p className="lead fs-4">Track your workouts, set goals, and achieve your fitness dreams.</p>
                    <Link to="/fitness">
                        <Button variant="light" size="lg" className="fw-bold px-5 py-3 mt-3">
                            🚀 Start Tracking
                        </Button>
                    </Link>
                </Container>
            </section>



            {/*{ Features Section }*/}
            {/*<Container className="mt-5">*/}
            {/*    <Row className="text-center justify-content-center">*/}
            {/*        <Col md={4}>*/}
            {/*            <Card className="shadow-lg p-5" style={{height: "250px"}}>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title className="fs-2 fw-bold ">📊 Track Workouts</Card.Title>*/}
            {/*                    <Card.Text className="fs-5 ">Log your exercises and calories burned.</Card.Text>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*        <Col md={4}>*/}
            {/*            <Card className="shadow-lg p-5" style={{height: "250px"}}>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title className="fs-2 fw-bold">🎯 Set Goals</Card.Title>*/}
            {/*                    <Card.Text className="fs-5">Stay motivated with personalized fitness goals.</Card.Text>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*        <Col md={4}>*/}
            {/*            <Card className="shadow-lg p-5" style={{height: "250px"}}>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title className="fs-2 fw-bold">📈 View Progress</Card.Title>*/}
            {/*                    <Card.Text className="fs-5">Analyze your journey with reports and insights.</Card.Text>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
            <Container className="mt-5">
                <Row className="text-center justify-content-center">
                    <Col md={4} className="d-flex justify-content-center">
                        <Card className="shadow-lg p-5" style={{ width: "100%", maxWidth: "350px", height: "250px" }}>
                            <Card.Body>
                                <Card.Title className="fs-2 fw-bold">📊 Track Workouts</Card.Title>
                                <Card.Text className="fs-5">Log your exercises and calories burned.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center">
                        <Card className="shadow-lg p-5" style={{ width: "100%", maxWidth: "350px", height: "250px" }}>
                            <Card.Body>
                                <Card.Title className="fs-2 fw-bold">🎯 Set Goals</Card.Title>
                                <Card.Text className="fs-5">Stay motivated with personalized fitness goals.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center">
                        <Card className="shadow-lg p-5" style={{ width: "100%", maxWidth: "350px", height: "250px" }}>
                            <Card.Body>
                                <Card.Title className="fs-2 fw-bold">📈 View Progress</Card.Title>
                                <Card.Text className="fs-5">Analyze your journey with reports and insights.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </>
    );
};

export default Home;

