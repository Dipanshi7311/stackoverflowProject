import { fetchallusers } from "./action/users";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Comnponent/Navbar/navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Allroutes from "./Allroutes";
import { useDispatch } from "react-redux";
import { fetchallquestion } from "./action/question";
import Auth from "./pages/Auth/Auth.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";

function App() {
  const [slidein, setslidein] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchallusers());
    dispatch(fetchallquestion());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setslidein(false);
    }
  }, []);
  const handleslidein = () => {
    if (window.innerWidth <= 768) {
      setslidein((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleslidein={handleslidein} />
        <Allroutes slidein={slidein} handleslidein={handleslidein} />
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Other routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
