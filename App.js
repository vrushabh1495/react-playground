import React from "react";
import ReactDOM from "react-dom";

const Title = () => (
    <h1 id="title"> Some title</h1>
)

const number = 1000
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        {number}
        <h1 id="heading">
            Some heading
        </h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);