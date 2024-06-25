import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="main">
      <section className="sectionError">
        <div className="sectionError__container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link to="/">Go back to Home</Link>
        </div>
      </section>
    </main>
  );
}
