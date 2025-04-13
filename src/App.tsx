import { Route, Routes } from "react-router";
import { DashBoard } from "./components/pages/DashBoard";
import { Login } from "./components/pages/Login";
import "./App.css";
import { AuthenticationRoute } from "./routes/AuthenticationRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <AuthenticationRoute>
            <Login />
          </AuthenticationRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
