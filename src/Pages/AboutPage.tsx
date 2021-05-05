import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  const handleHistory = () => {
    history.push("/");
  };
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
        vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
        voluptatum.
      </p>
      <button className="btn" onClick={handleHistory}>
        Back to the home page
      </button>
    </>
  );
};
