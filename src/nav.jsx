import {  Link } from "react      let blueBtn='btn btn-primary';
-router-dom";


const Nav = () => {


  return (
      <nav className="d-flex gap-4">
        <Link className={blueBtn} to='/home'>Home</Link>
        <Link className={blueBtn} to="/pricing">Pricing</Link>
        <Link className={blueBtn} to="/about">About</Link>
      </nav>
      
  )
}

export default Nav;
