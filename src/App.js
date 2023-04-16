import  "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tales from "./pages/Tales";
import Shop from "./pages/Shop";
import Community  from "./pages/Community";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import pilastar from "./assets/landing/pilastar.png"

function App(){
  return (
    <div classname="App">
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Tales" element={<Tales />} />
          <Route path="Community" element={<Community />} />

        </Routes>
        
        <Footer/>
      </Router>
     
    </div>
    
  )


}

export default App;