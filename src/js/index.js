//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let count = 0
//render your react application
setInterval(()=> {
    count++    
    ReactDOM.render(<Home count={count}/>, document.querySelector("#app"));
},1000)