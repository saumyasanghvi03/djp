import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Music from "./pages/Music";
import Coach from "./pages/Coach";
import Challenge30Day from "./pages/Challenge30Day";
import SOS from "./pages/SOS";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StreamlitApp from "./pages/StreamlitApp";


function Router() {
  return (
    <Switch>
      <Route path={"/?"} component={Home} />
      <Route path={"/features"} component={Features} />
      <Route path={"/music"} component={Music} />
      <Route path={"/coach"} component={Coach} />
      <Route path={"/30day"} component={Challenge30Day} />
      <Route path={"/sos"} component={SOS} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/app"} component={StreamlitApp} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

import { useLocation, useRoute } from "wouter";
import { Navigation } from "./components/JainVibesComponents";

function App() {
  const [location, navigate] = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'AI Coach', href: '/coach' },
    { label: 'Music', href: '/music' },
    { label: '30-Day Challenge', href: '/30day' },
    { label: 'SOS', href: '/sos' },
  ];

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-gradient-to-br from-[#fafaf5] via-[#f0f0eb] to-[#e6e6e1] animate-pulse-slow flex flex-col">
            <Navigation
              links={navLinks}
              currentPath={location}
              onNavigate={navigate}
            />
            <div className="flex-1">
              <Router />
            </div>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
