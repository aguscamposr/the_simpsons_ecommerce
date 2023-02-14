import "./App.css";

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS

import NavBar from "./components/NavBar/NavBar";

// PAGES
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import CartWidget from "./pages/CartWidget/CartWidget";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
