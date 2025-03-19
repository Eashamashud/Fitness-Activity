// import React, { useEffect, useState } from "react";
// import { fetchFitnessData, addFitnessEntry } from "../api";
// import {Container, Table, Button, Card, Row, Col, Form, Navbar, Nav} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
//
// const Fitness = () => {
//     const [fitnessData, setFitnessData] = useState([]);
//     const [exerciseName, setExerciseName] = useState("");
//     const [date, setDate] = useState("");
//     const[duration, setDuration] = useState("");
//     const[caloriesBurned, setCaloriesBurned] = useState("");
//     const[notes, setNotes] = useState("");
//
//     useEffect(() => {
//         fetchFitnessData().then(setFitnessData);
//     }, []);
//
//     // ✅ Handle Adding a New Fitness Entry
//     // const handleAddFitness = async () => {
//     //     if (newExercise.trim() === "") return;
//     //     const newEntry = { exerciseName: newExercise, date: new Date().toISOString().split("T")[0], durationInMinutes: 30, caloriesBurned: 200 };
//     //     const addedEntry = await addFitnessEntry(newEntry);
//     //     setFitnessData([...fitnessData, addedEntry]); // Update UI
//     //     setNewExercise(""); // Clear input
//     // };
//
//     const handleAddFitness = async () => {
//         event.preventDefault(); // ✅ Prevent page reload
//
//         // Prevents adding if fields are empty
//         if(!exerciseName.trim() || !duration || !caloriesBurned){
//             alert("Please fill in all fields");
//             return;
//         }
//
//         const newEntry = {
//             exerciseName : exerciseName,
//             date: new Date().toISOString().split("T")[0], // Current data
//             durationInMinutes: parseInt(duration), // Convert to number
//             caloriesBurned: parseInt(caloriesBurned), // Convert to number
//             notes: notes
//         };
//
//         try {
//             const addedEntry = await addFitnessEntry(newEntry);
//             setFitnessData([...fitnessData, addedEntry]); // Update UI
//             setExerciseName(""); // Clear input
//             setDuration("");
//             setCaloriesBurned("");
//             setNotes("");
//         } catch (error){
//             console.error("Error adding fitness entry:", error);
//         }
//     }
//
//
//     return (
//
//         <>
//             <Navbar bg="dark" variant="dark" expand="lg">
//                 <Container>
//                     <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ms-auto">
//                             <Nav.Link href="/">Home</Nav.Link>
//                             <Nav.Link href="/fitness">Fitness</Nav.Link>
//                             <Nav.Link href="/Workouts">Workouts</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={10}>
//                     <Card className="shadow-lg">
//                         <Card.Body>
//                             <Card.Title className="text-center mb-4">📊 Workout Log</Card.Title>
//                             <Table striped bordered hover>
//                                 <thead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Exercise Name </th>
//                                     <th>Date 📅</th>
//                                     <th>Duration (min) ⏱️</th>
//                                     <th>Calories Burned 💪🏼</th>
//                                     <th>Notes 📝</th>
//                                 </tr>
//                                 </thead>
//                                 <tbody>
//                                 {fitnessData.map((entry, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td>{entry.exerciseName}</td>
//                                         <td>{entry.date}</td>
//                                         <td>{entry.durationInMinutes}</td>
//                                         <td>{entry.caloriesBurned}</td>
//                                         <td>{entry.notes}</td>
//                                     </tr>
//                                 ))}
//                                 </tbody>
//                             </Table>
//
//                             {/* ✅ Add New Exercise */}
//                             <Form>
//                                 <Form.Group>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter exercise name"
//                                         value={exerciseName}
//                                         onChange={(e) => setExerciseName(e.target.value)}
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" className="mt-3" onClick={handleAddFitness}>
//                                     ➕ Add Exercise
//                                 </Button>
//                             </Form>
//
//                             {/* ✅ Add the Date */}
//                             <Form>
//                                 <Form.Group>
//                                     <Form.Control
//                                         type="date"
//                                         placeholder="Enter the date"
//                                         value={date}
//                                         onChange={(e) => setDate(e.target.value)}
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" className="mt-3" onClick={handleAddFitness}>
//                                     ➕ Add Date
//                                 </Button>
//                             </Form>
//
//                             {/* ✅ Add Duration */}
//                             <Form>
//                                 <Form.Group>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter the duration for the exercise"
//                                         value={duration}
//                                         onChange={(e) => setDuration(e.target.value)}
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" className="mt-3" onClick={handleAddFitness}>
//                                     ➕ Add Duration
//                                 </Button>
//                             </Form>
//
//                             {/* ✅ Add Calories Burned */}
//                             <Form>
//                                 <Form.Group>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter amount of calories burned"
//                                         value={caloriesBurned}
//                                         onChange={(e) => setCaloriesBurned(e.target.value)}
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" className="mt-3" onClick={handleAddFitness}>
//                                     ➕ Add Calories
//                                 </Button>
//                             </Form>
//
//                             {/* ✅ Add any additional Notes*/}
//                             <Form>
//                                 <Form.Group>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter any additional notes"
//                                         value={notes}
//                                         onChange={(e) => setNotes(e.target.value)}
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" className="mt-3" onClick={handleAddFitness}>
//                                     ➕ Add Notes
//                                 </Button>
//                             </Form>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//         </>
//     );
// };
//
// export default Fitness;
import React, { useEffect, useState } from "react";
import { fetchFitnessData, addFitnessEntry } from "../api";
import { Container, Table, Button, Card, Row, Col, Form, Navbar, Nav } from "react-bootstrap";

const Fitness = () => {
    const [fitnessData, setFitnessData] = useState([]);
    const [exerciseName, setExerciseName] = useState("");
    const [date, setDate] = useState("");
    const [duration, setDuration] = useState("");
    const [caloriesBurned, setCaloriesBurned] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        fetchFitnessData().then(setFitnessData);
    }, []);

    const handleAddFitness = async (event) => {
        event.preventDefault(); // ✅ Prevent page reload

        // Get the userId from local storage
        const userId = localStorage.getItem("userId");

        // Prevent adding if fields are empty
        if (!exerciseName.trim() || !date || !duration || !caloriesBurned) {
            alert("Please fill in all fields");
            return;
        }

        const newEntry = {
            exerciseName: exerciseName,
            date: date, // ✅ Uses user-selected date
            durationInMinutes: parseInt(duration), // Convert to number
            caloriesBurned: parseInt(caloriesBurned), // Convert to number
            notes: notes // ✅ Include notes
        };

        try {
            const addedEntry = await addFitnessEntry(newEntry);
            setFitnessData([...fitnessData, addedEntry]); // Update UI
            // Clear input fields
            setExerciseName("");
            setDate("");
            setDuration("");
            setCaloriesBurned("");
            setNotes("");
        } catch (error) {
            console.error("Error adding fitness entry:", error);
        }
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/fitness">Fitness</Nav.Link>
                            <Nav.Link href="/workouts">Workouts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Card className="shadow-lg">
                            <Card.Body>
                                <Card.Title className="text-center mb-4">📊 Workout Log</Card.Title>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Exercise Name</th>
                                        <th>Date 📅</th>
                                        <th>Duration (min) ⏱️</th>
                                        <th>Calories Burned 💪🏼</th>
                                        <th>Notes 📝</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {fitnessData.map((entry, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{entry.exerciseName}</td>
                                            <td>{entry.date}</td>
                                            <td>{entry.durationInMinutes}</td>
                                            <td>{entry.caloriesBurned}</td>
                                            <td>{entry.notes}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>

                                {/* ✅ Single Form for All Fields */}
                                <Form onSubmit={handleAddFitness}>
                                    <Form.Group className="mb-2">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter exercise name"
                                            value={exerciseName}
                                            onChange={(e) => setExerciseName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Control
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter duration (minutes)"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter calories burned"
                                            value={caloriesBurned}
                                            onChange={(e) => setCaloriesBurned(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter any additional notes"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="mt-3 w-100">
                                        ➕ Add Exercise
                                    </Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Fitness;
