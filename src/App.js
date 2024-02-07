import "./App.css";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Terms } from "./components/Terms";
import { ConfirmEmail } from "./components/ConfirmEmail/ConfirmEmail";
import { SendEmail } from "./components/SendEmail/SendEmail";
import { Dashboard } from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/forgot-pw" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
