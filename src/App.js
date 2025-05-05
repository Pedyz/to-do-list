import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Howtouse from "./pages/How to use/Howtouse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/how-to-use" element={<Howtouse/>} />
      </Routes>
    </Router>
  );
};

export default App;
