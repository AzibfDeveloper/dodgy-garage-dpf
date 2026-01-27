import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Bristol from "./pages/Bristol";
import Exeter from "./pages/Exeter";
import Taunton from "./pages/Taunton";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/bristol"} component={Bristol} />
      <Route path={"/exeter"} component={Exeter} />
      <Route path={"/taunton"} component={Taunton} />
      <Route path={"/blog/:id?"} component={Blog} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
