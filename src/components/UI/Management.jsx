import React from "react";
import "../CSS/Management.css";
import Profile from "./Profile";

const Management  = ()=>{
    return(
        <div className = "Management">

            <h1>Management Team</h1>
             <Profile ProfileName = "Shreyan" />
             
             
             <Profile ProfileName = "Srikar" />
             <Profile ProfileName = "Nithin" />
             <Profile ProfileName = "Mahesh" />
             <Profile ProfileName = "Prasanna" />
           

        </div>
    )
}
export default Management;