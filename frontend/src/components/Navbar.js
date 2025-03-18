import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            {/*<h1 className="text-xl font-bold">My Fitness App</h1>*/}
            <div>
                {/*<Link to="/" className="px-4">Home</Link>*/}
                {/*<Link to="/fitness" className="px-4">Fitness</Link>*/}
            </div>
        </nav>
    );
};

export default Navbar;

