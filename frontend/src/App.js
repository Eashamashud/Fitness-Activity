import React, {useState} from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Fitness from "./Pages/Fitness";
import Workouts from "./Pages/Workouts";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  const [refresh, setRefresh] = useState(false); // Used to trigger re-render

  return (
      <div className="d-flex flex-column min-vh-100">
          <Navbar/> {/* Navbar will be shown on all pages */}
          <div className="flex-grow-1">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/fitness" element={<Fitness/>}/>
              <Route path="*" element={<NotFound/>}/> {/* 404 Page*/}
              <Route path="/workouts" element={<Workouts />} />
          </Routes>
          </div>
          {/* Footer Stays at the Bottom */}
          <footer className="bg-dark text-white text-center p-3 mt-auto">
              &copy; 2025 Fitness Tracker | Stay Fit, Stay Strong!
          </footer>

      </div>
  );
};

export default App;