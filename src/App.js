import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <NavBar />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
