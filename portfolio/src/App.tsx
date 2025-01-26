import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorSchemeProvider } from './contexts/ColorSchemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';

const App: React.FC = () => {
    return (
        <ColorSchemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="experiences" element={<Experiences />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
        </ColorSchemeProvider>
    );
};

export default App;