import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import UserForm from "./Login/UserForm";
import PlacesList from "./component/PlacesList";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./component/Home";
import PlaceDetail from "./mod/PlaceDetail";

function App() {
  return (
    <>
      <Nav />
      
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/place/:id" component={PlaceDetail} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
