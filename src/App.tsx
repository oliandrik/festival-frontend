import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { links } from "./constants/navigation-links";

function App() {
  return (
    <div>
      <Navbar links={links} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
