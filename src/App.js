import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shopping from './components/Shopping';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
        <HashRouter basename='/'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shopping" element={<Shopping />} />
          </Routes>
          <Footer />
         </HashRouter>
    </BrowserRouter>
  );
};

export default App;
