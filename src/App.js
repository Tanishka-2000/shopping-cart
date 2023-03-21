import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Shopping from './shopping/Shopping';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping" element={<Shopping />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
};

export default App;
