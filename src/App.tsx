import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

const links = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Schedule", url: "/schedule" },
  { text: "News", url: "/news" },
  { text: "Contacts", url: "/contacts" },
];

function App() {
  return (
    <div>
      <Navbar links={links} />
      <Intro />
    </div>
  );
}

export default App;
