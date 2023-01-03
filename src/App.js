import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.css";
import Header from "./Header/Header";

const App = () => {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
