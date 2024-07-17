import { useRef, useState } from 'react'
// styles
import './styles/index.scss';
// import 'react-toastify/dist/ReactToastify.min.css';
import ThemeStyles from './styles/theme';
import { ThemeProvider } from 'styled-components';

// hooks
import { useTheme } from './contexts/themeContext';
import { SidebarProvider } from './contexts/sidebarContext';
import { useWindowSize } from 'react-use';

// fonts
import './fonts/icomoon/icomoon.woff';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AppBar from './layouts/AppBar';
import Sidebar from './layouts/Sidebar';



function App() {
  const { width } = useWindowSize();
  const appRef = useRef(null);
  const { theme } = useTheme();
  const path = useLocation().pathname;
  const withSidebar = path !== '/login' && path !== '/404';

  console.log(path);
  console.log(width);
  console.log(withSidebar);
  console.log(width < 1280 && withSidebar);
  return (
    <SidebarProvider>
      <ThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        {width < 1280 && withSidebar && <AppBar />}
        <div className={`app ${!withSidebar ? 'fluid' : ''}`}>
          {withSidebar && <Sidebar/>}
          <div className="app_content">
            {width >= 1280 && withSidebar && <AppBar/>}
            <div className="main">
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </SidebarProvider>
  )
}

export default App
