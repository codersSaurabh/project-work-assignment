import "./App.css";
import AddEvent from "./components/AddEvent";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowEvent from "./components/ShowEvent";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import LogInUser from "./components/LogInUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ShowEvent />} />
          <Route exact path="/addevent/:id" element={<AddEvent />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/LogIn" element={<LogIn />} />
          <Route exact path="/LogInUser/:id" element={<LogInUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
