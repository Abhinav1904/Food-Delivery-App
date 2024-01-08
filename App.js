import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement("h2", {}, "Hello Child2"),
  ])
);

const Title = () => <h1>Namaste React</h1>;

const jsxHeading = <h1>Hello</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
