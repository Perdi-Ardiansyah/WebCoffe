import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Coffee from './pages/Coffee';
import MiniSoccer from './pages/MiniSoccer';
import About from './pages/About';  

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beranda" element={<Home />} />
          <Route path="/coffe" element={<Coffee />} />
          <Route path="/mini-soccer" element={<MiniSoccer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
