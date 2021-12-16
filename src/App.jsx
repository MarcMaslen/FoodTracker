import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import './app.scss';
import {useState} from 'react';
import About from "./components/about/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
      </div>
    </div>
  );
}

export default App;
