import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./componenets/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route exact path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
