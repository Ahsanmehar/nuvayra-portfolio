import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import Header from "./pages/header";
import Footer from "./pages/footer";
import HomePage from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import ScrollUp from "./components/ScrollUp";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </RouterRoutes>
        <Footer />
        <ScrollUp />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
