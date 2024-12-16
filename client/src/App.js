import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="d-flex flex-column App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
