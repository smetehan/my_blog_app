import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NavBar from "../components/Navbar";
import { Container } from "react-bootstrap";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<PrivateRouter />}>
              <Route path="" element={<Blog />} />
            </Route>
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default AppRouter;
