import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apply from './pages/Apply/Apply';
import Teams from './pages/Teams/Teams';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import BackEndTest from './components/BackendTest/BackEndTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/test" element={<BackEndTest />} />
      </Routes>
    </Router>
  );
}

export default App;