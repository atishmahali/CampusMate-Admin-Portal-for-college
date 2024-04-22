import React from "react";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <header className="appNavbar">
      <Link to="/">
        <h1>CampusMate : Elective Switching Made Easy ;)</h1>
      </Link>
    </header>
  );
}

export default AppNavbar;
