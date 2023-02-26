import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
