import React from 'react';
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/teams" element={<Landing />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App