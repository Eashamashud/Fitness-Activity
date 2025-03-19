import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Table, Form, Button, Modal, Navbar, Nav} from "react-bootstrap";

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        exerciseName: "",
        date: "",
        durationInMinutes: "",
        caloriesBurned: "",
        notes: "",
    });

    // Fetch workouts from backend
    // useEffect(() => {
    //     fetchWorkouts();
    // }, []);

    useEffect(() => {
        const userId = localStorage.getItem("userId"); // Get user ID from storage
        if (userId) {
            fetchWorkouts(userId);
        }
    }, []);


    // const fetchWorkouts = async () => {
    //     try {
    //         //const response = await axios.get("http://localhost:8080/api/getAllFitness");
    //         const response = await axios.get("https://fitness-activity-production.up.railway.app/api/getAllFitness");
    //         setWorkouts(response.data);
    //     } catch (error) {
    //         console.error("Error fetching workouts:", error);
    //     }
    // };
    const fetchWorkouts = async (userId) => {
        try {
            const response = await axios.get(`https://fitness-activity-production.up.railway.app/api/getUserFitness/${userId}`);
            setWorkouts(response.data);
        } catch (error) {
            console.error("Error fetching workouts:", error);
        }
    };


    // Handle input changes in form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Open the edit modal
    const handleEdit = (workout) => {
        setSelectedWorkout(workout);
        setFormData(workout);
        setShowModal(true);
    };
    //
    // // Update workout
    // const handleUpdate = async () => {
    //     try {
    //         //await axios.put(`http://localhost:8080/api/updateFitnessById/${selectedWorkout.id}`, formData);
    //         await axios.put(`https://fitness-activity-production.up.railway.app/api/updateFitnessById/${selectedWorkout.id}`, formData);
    //         setShowModal(false);
    //         fetchWorkouts(); // Refresh the list
    //     } catch (error) {
    //         console.error("Error updating workout:", error);
    //     }
    // };
    //
    // // Delete workout
    // const handleDelete = async (id) => {
    //     if (window.confirm("Are you sure you want to delete this workout?")) {
    //         try {
    //             //await axios.delete(`http://localhost:8080/api/deleteFitnessById/${id}`);
    //             await axios.delete(`https://fitness-activity-production.up.railway.app/api/deleteFitnessById/${id}`);
    //             fetchWorkouts(); // Refresh the list
    //         } catch (error) {
    //             console.error("Error deleting workout:", error);
    //         }
    //     }
    // };

    // Update workout
    const handleUpdate = async () => {
        try {
            const userId = localStorage.getItem("userId");  // ✅ Get user ID
            await axios.put(`https://fitness-activity-production.up.railway.app/api/updateFitnessById/${selectedWorkout.id}`, formData);
            setShowModal(false);
            if (userId) fetchWorkouts(userId); // ✅ Ensure correct user data is fetched
        } catch (error) {
            console.error("Error updating workout:", error);
        }
    };

// Delete workout
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this workout?")) {
            try {
                const userId = localStorage.getItem("userId");  // ✅ Get user ID
                await axios.delete(`https://fitness-activity-production.up.railway.app/api/deleteFitnessById/${id}`);
                if (userId) fetchWorkouts(userId); // ✅ Ensure correct user data is fetched
            } catch (error) {
                console.error("Error deleting workout:", error);
            }
        }
    };


    return (
        <>
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
        <Container>
            <h2 className="mt-4">Workout History</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Date</th>
                    <th>Duration (min)</th>
                    <th>Calories Burned</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {workouts.map((workout) => (
                    <tr key={workout.id}>
                        <td>{workout.exerciseName}</td>
                        <td>{workout.date}</td>
                        <td>{workout.durationInMinutes}</td>
                        <td>{workout.caloriesBurned}</td>
                        <td>{workout.notes}</td>
                        <td>
                            <Button variant="warning" size="sm" onClick={() => handleEdit(workout)}>Edit</Button>{" "}
                            <Button variant="danger" size="sm" onClick={() => handleDelete(workout.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Workout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Exercise Name</Form.Label>
                            <Form.Control type="text" name="exerciseName" value={formData.exerciseName} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Duration (minutes)</Form.Label>
                            <Form.Control type="number" name="durationInMinutes" value={formData.durationInMinutes} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Calories Burned</Form.Label>
                            <Form.Control type="number" name="caloriesBurned" value={formData.caloriesBurned} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows={3} name="notes" value={formData.notes} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </>
    );
};

export default Workouts;


