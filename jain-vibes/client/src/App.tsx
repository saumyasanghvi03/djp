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

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
