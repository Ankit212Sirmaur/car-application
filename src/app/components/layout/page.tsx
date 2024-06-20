import React, { ReactNode } from 'react';
import Footer from '../Footer/page';
import NavBar from '../NavBar/page';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-3xl w-full mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;