import Landing from "./Routes/landing";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Routes/Signup";
import Login from "./Routes/Login";
import Navbar from "./Components/Navbar";
import { useAuth } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Routes/Dashboard";

function App() {
  const { loading, currentUser } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse text-indigo-600 text-xl">
          Loading QuickNotes
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? <Navigate to="/dashboard" replace /> : <Landing />
            }
          />

          <Route
            path="/login"
            element={
              currentUser ? <Navigate to="/dashboard" replace /> : <Login />
            }
          />

          <Route
            path="/signup"
            element={
              currentUser ? <Navigate to="/dashboard" replace /> : <Signup />
            }
          />

          <Route path="/dashboard" element={<ProtectedRoute>
           <div className="container mx-auto px-4">
            <Dashboard />
            </div> 
          </ProtectedRoute>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
