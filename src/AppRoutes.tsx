import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

interface AppRoutesProps {
    children?: React.ReactNode;
}

const AppRoutes: React.FC = ({}: AppRoutesProps) => {
    return (
        <Router>
            <Routes>
                {/* all paths match exactly by deafult now */}
                {/* this asterisk syntax below is how you denote you want to catch all routes that 'match', not just exact routes */}
                {/* you can nest routes at the dashboard component to catch the rest of the routes caught under this syntax */}
                <Route path={'/dashboard/*'} element={<Dashboard />} />
                <Route path={'/'} element={<Landing />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
