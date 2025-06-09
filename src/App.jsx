import Landing from "./Routes/landing";
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from "./Routes/Signup";
import Login from "./Routes/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
