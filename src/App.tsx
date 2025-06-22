import { BrowserRouter, Route, Routes } from 'react-router';

import SidebarLayout from './components/layout/SidebarLayout';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/dashboard"
                    element={
                        <SidebarLayout>
                            <Dashboard />
                        </SidebarLayout>
                    }
                />
                <Route
                    path="/chat"
                    element={
                        <SidebarLayout>
                            <Chat />
                        </SidebarLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
