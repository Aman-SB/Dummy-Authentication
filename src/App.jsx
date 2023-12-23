import "./App.css";
import Card from "./components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Card/>}/>
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
