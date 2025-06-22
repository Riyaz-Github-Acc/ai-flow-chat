import { Brain, ChartGantt, LayoutDashboard, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

const SidebarNav = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navItems = [
        { to: '/', icon: <ChartGantt />, label: 'Landing' },
        { to: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
        { to: '/chat', icon: <MessageSquare />, label: 'Chat' },
    ];

    const handleNavClick = () => {
        setCollapsed(true);
    };

    return (
        <aside
            className={`fixed left-0 top-0 flex flex-col gap-3 bg-slate-900 text-white h-screen z-40 overflow-hidden transition-all duration-500 ease-in-out
                ${collapsed ? 'w-[62px]' : 'w-48'}`}
        >
            <div
                className="flex items-center px-3 py-2 cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                role="button"
                tabIndex={0}
            >
                <div className="flex items-center gap-3 w-full">
                    <div className="gradient-logo gradient-bg-secondary p-1.5 rounded-lg flex-shrink-0">
                        <Brain />
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap
                            ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}
                    >
                        <h3 className="font-medium text-xl select-none">AI Flow</h3>
                    </div>
                </div>
            </div>
            <nav className="flex flex-col gap-3 px-3 pb-4">
                {navItems.map(({ to, icon, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700
                            transition-colors duration-200 group
                            ${isActive ? 'bg-purple-600' : ''}`
                        }
                        title={collapsed ? label : ''}
                        onClick={handleNavClick}
                    >
                        <div className="flex justify-center items-center flex-shrink-0">{icon}</div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap
                                ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}
                        >
                            <span className="select-none">{label}</span>
                        </div>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default SidebarNav;
