import logo from "./logo.svg";
import "./App.css";
import Bmi from "./bmi";
import Github_search from "./github-search";
import ShoppingList from "./shopping-list";
import ShoppingList2 from "./shopping-list2";
import { useState, useEffect } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count < 6) {
//       setTimeout(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//     }
//   });

//   return <h1>I have rendered {count} times!</h1>;
// }

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ShoppingList2 />
      {/* <Bmi></Bmi> */}
      {/* <Github_search></Github_search> */}
      {/* <Timer /> */}
    </div>
  );
}

export default App;
