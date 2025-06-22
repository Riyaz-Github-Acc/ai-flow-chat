import type { ReactNode } from 'react';

import SidebarNav from '../SidebarNav';

const SidebarLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex">
            <SidebarNav />
            <main className="gradient-bg min-h-screen overflow-auto ml-[62px] w-[calc(100%-62px)]">
                {children}
            </main>
        </div>
    );
};

export default SidebarLayout;
