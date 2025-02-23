import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav.js";
import Footer from "./components/footer.js";
import HomeScreen from "./pages/HomeScreen.js";
import SignUp from "./pages/SignUp.js";

import "./navfoot.css";
import "./home.css";
import "./signup.css";
import "./aboutus.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
