import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shopping from './components/Shopping';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shopping" element={<Shopping />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
