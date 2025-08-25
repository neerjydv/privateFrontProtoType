import React from 'react';
import Navbar from '../Navbar/Navbar';

/**
 * Shared layout component for consistent page structure.
 * Place header, footer, and main content here.
 */
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Header */}
      <header className="layout-header">
              {/* Add your header content here */}
              <Navbar/>
      </header>

      {/* Main Content */}
      <main className="layout-main">
        {children}
      </main>

      {/* Footer */}
      <footer className="layout-footer">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default Layout;