import Navigation from "./components/Navigation";
import Squad from "./components/Squad";
import ServerInfo from "./components/ServerInfo";
import "./index.css";

function App() {
  return (
    <div className="relative z-10 bg-opacity-60 bg-cover bg-no-repeat bg-main-background-blur h-screen App">
      <div className="bg-gradient-to-b from-primary-black/5 via-primary-black/50 to-primary-black/80 w-full h-screen">
        <Navigation />
        <main className="px-14 py-4">
          <ServerInfo />
        </main>
        <Squad />
      </div>
    </div>
  );
}

export default App;
