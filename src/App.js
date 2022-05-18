import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Login from "./Pages/Auth/Login";
import PrivateRoute from "./Pages/Auth/PrivateRoute";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
