import React from "react";
import  ReactDOM  from 'react-dom/client'

const Restaurant=()=>{
    return(
        <h1>This is the new Restaurant App</h1>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Restaurant/>)