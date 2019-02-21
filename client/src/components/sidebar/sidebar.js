import React from "react";
import "../sidebar/sidebar.css";


function Sidebar() {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3 className="heading">EverGame</h3>
                <strong>EG</strong>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <a href="/yourList">
                        <i className="fas fa-list iconSpacing"></i>
                        Your List
                    </a>
                </li>
                <li>
                    <a href="/home">
                        <i className="fas fa-home iconSpacing"></i>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/game">
                        <i className="fas fa-trophy iconSpacing"></i>
                        Game Test
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default Sidebar;