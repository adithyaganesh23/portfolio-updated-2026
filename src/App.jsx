import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SettingsProvider } from './context/SettingsContext';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { AllProjects } from './pages/AllProjects';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default function App() {
  return (
    <SettingsProvider>
      <div className="bg-background dark:bg-zinc-950 min-h-screen transition-colors duration-500 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-primary">
        <ScrollToTop />
        <Header />

        <Switch>
          <Route path="/project/:id" component={ProjectDetail} />
          <Route path="/work" component={AllProjects} />
          <Route path="/" component={Home} />
          {/* Default route (404) redirects to Home */}
          <Route component={Home} />
        </Switch>

        <Footer />
      </div>
    </SettingsProvider>
  );
}
