import React from "react";
import logo from "./comp.png";


function Sidebar() {

    return <div class="app-sidebar">
        <h2>Lazulis.</h2>
        <div class="app-sidebar-notes">
            <div class="app-sidebar-note">
                <img src={logo}/>
                <p>Note</p>
            </div>
        </div>
    </div>;
}

export default Sidebar;