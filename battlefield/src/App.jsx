import Navigation from "./components/Navigation";
import Squad from "./components/Squad";
import ServerInfo from "./components/ServerInfo";
import "./index.css";

function App() {
  return (
    <div className="bg-cover bg-no-repeat bg-main-background-blur w-full h-screen overflow-hidden App">
      <div className="relative bg-gradient-to-b from-primary-black/5 via-primary-black/50 to-primary-black/80 w-full h-screen">
        <Navigation />
        <ServerInfo />
        <Squad />
      </div>
    </div>
  );
}

export default App;
