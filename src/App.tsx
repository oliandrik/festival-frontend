import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import { links } from "./constants/navigation-links";

function App() {
  return (
    <div>
      <Navbar links={links} />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
