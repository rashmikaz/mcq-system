import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
