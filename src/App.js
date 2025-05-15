import React from "react";
import "./styles.css";
import "./main.js";
import "./nav.js";

function YouChef() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>YouChef</h1>
      </header>

      <nav className="nav">
        <h1>Nav</h1>
      </nav>

      <main className="main">
        <h1>Main</h1>
      </main>

      <aside className="aside">
        <h1>Aside</h1>
      </aside>

      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default YouChef;
