import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./Components/Add";
import Home from "./Components/Home";
import Update from "./Components/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/user/create" element={<Add />} />
        <Route path="/user/edit/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
