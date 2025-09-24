// import Nav from "./nav";
// import Footer from "./footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pricing from "./pricing";
import About from "./about";
import Home from "./home";
function App() {

    let blueBtn='btn btn-primary';

  return (
    
    <BrowserRouter>
    <nav className="d-flex gap-4">
        <Link className={blueBtn} to='/home'>Home</Link>
        <Link className={blueBtn} to="/pricing">Pricing</Link>
        <Link className={blueBtn} to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        {/* Optionally, add a default route or a home component */}
      </Routes>
   <footer style={{ position: "fixed", bottom: 0, width: "100%" ,backgroundColor:'#191919'}} className="d-flex p-3 gap-4">
        <Link to='/home'>Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
      </footer>  
    </BrowserRouter>
    
    
    
  );
}

export default App;
