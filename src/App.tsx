import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { DashBoard } from "./components/pages/DashBoard";
import { Login } from "./components/pages/Login";
import { AuthenticationRoute } from "./routes/AuthenticationRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { useThemeStore } from "./stores/theme";
import { Container } from "./components/organisms/Container";
import { UserDetailsForm } from "./components/organisms/UserDetailsForm";

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
      >
        <Route index element={<Container />} />
        <Route path="/dashboard" element={<Container />} />
        <Route path="/dashboard/new" element={<UserDetailsForm />} />
      </Route>
    </Routes>
  );
}

export default App;
