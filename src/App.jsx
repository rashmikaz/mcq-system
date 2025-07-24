import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Exam from "./pages/Exam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </Router>
  );
}

export default App;
