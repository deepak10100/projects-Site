import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Btod from "./components/binaryToDecimals/Btod";
import Calculator from "./components/Calculator/Calculator";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/binary_to_decimal"  element={<Btod />}/>
        <Route path="/calculator"  element={<Calculator />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
