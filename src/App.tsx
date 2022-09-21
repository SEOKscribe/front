import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  NavigateFunction,
} from "react-router-dom";
import LoginComponent from "./login/login";

const App: React.FC = () => {
  let navigate: NavigateFunction = useNavigate();
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
          <Nav>
            <Nav.Link href="#deets">Sign up</Nav.Link>
            <Nav.Link
              eventKey={2}
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </div>
  );
};

export default App;
