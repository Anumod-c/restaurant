import React from "react";
import  ReactDOM  from 'react-dom/client'

const Restaurant=()=>{
    return(
        <div>

        <h1>This is the new Restaurant App</h1>
        </div>
    )
    }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Restaurant/>)