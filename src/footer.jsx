import {Link } from "react-router-dom";


const Footer = () => {
  return (
      <footer style={{ position: "fixed", bottom: 0, width: "100%" ,backgroundColor:'#191919'}} className="d-flex p-3 gap-4">
        <Link to='/home'>Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
      </footer>      
  )
}

export default Footer;
