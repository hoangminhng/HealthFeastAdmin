import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/LoginPage";
import PageNotFound from "./Pages/PageNotFound";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Admin/Dashboard";
import User from "./Pages/Admin/User";
import Group from "./Pages/Admin/Group";
import Doctor from "./Pages/Admin/Doctor";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="user" element={<User />} />
            <Route path="group" element={<Group />} />
            <Route path="doctor" element={<Doctor />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
