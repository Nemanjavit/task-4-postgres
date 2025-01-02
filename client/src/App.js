import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import UserContext from "./context/AuthContext";
import RestrictedRoutes from "./components/RestrictedRoutes";
import TemplatePage from "./pages/TemplatePage";
import CreateTemplatePage from "./pages/CreateTemplatePage";

function App() {
  return (
    <div className="d-flex flex-column App">
      <UserContext>
        <ToastContainer
          position="top-right"
          hideProgressBar={true}
          autoClose={5000}
          theme="light"
        />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/template/create" element={<CreateTemplatePage />} />
          <Route path="/template/:id" element={<TemplatePage />} />
          <Route element={<RestrictedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </UserContext>
    </div>
  );
}

export default App;
