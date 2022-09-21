import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/logo192.png"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Random Chat
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default App;
