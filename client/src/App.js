import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Routes/ProtectedRoute";
import PublicRoute from "./Routes/PublicRoute";
import Donar from "./pages/dashboard/Donar";
import Hospital from "./pages/dashboard/Hospital";
import Organization from "./pages/dashboard/Organization";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/organization"
          element={
            <ProtectedRoute>
              <Organization />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospital />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login></Login>
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register></Register>
            </PublicRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
