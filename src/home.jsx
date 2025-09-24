// Home.jsx
// import Link  from "react-router-dom";
import { useState } from "react";

const Home = () => {
  let [count, setCount]=useState(0);

  function Add(){
    let counts = count++
    setCount(counts);
  }

  function Sub(){
    setCount(count>0?count-1:0);
  }


  return (
    <div>
      <h2>This is the Home page..</h2>
      <h2>This is the counter {count}</h2>
      {/* <Link to="/about" className="btn btn-success mt-3">
        Go to About Page
      </Link> */}

      <button onClick={()=> Add()}>+</button>
      <button onClick={()=> Sub()}>-</button>
    </div>
  );
};

export default Home;
