import React from "react";
import { Link } from "react-router-dom"

function HomePage() {
  return(
    <div>
      <h1>Hello from home page</h1>
      <Link to={"/bars"}>
        <button>Voir</button>
      </Link>
    </div>
  );
}

export default HomePage
