import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import SkillDetail from "./pages/SkillDetail";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/skill/:id" element={<SkillDetail />} />
            </Routes>
        </div>
    );
}

export default App;
