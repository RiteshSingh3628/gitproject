import './App.css';
import Navbar from './Components/Navbar'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contactus';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
    </Router>


    </div>
  );
}

export default App;
