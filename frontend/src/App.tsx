import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apply from './pages/Apply/Apply';
import Teams from './pages/Teams/Teams';
import BoardMembers from './pages/BoardMembers/BoardMembers';
import TeamDetail from './pages/TeamDetail/TeamDetail';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/board-members" element={<BoardMembers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:teamId" element={<TeamDetail />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;