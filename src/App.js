import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageError from './pages/PageError';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<PageError />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
