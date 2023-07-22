import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/Projects";
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </Router>
  )
}

export default App;
