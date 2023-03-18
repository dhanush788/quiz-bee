import React from "react";
import '../index.css'


function Navbar(){
    return(
        <div className="nav">
            <div className="profile-picture-container">
                <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture" />
            </div>
            <div className="nav-about">
                <h3>Hi ,User</h3>
                <h2>Welcome back</h2>
            </div>
        </div>

    )
}
export default Navbar;