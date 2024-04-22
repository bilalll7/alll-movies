import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import SuperHero from "./components/SuperHero";
import Trending from "./components/Trending";
import "./style/landingPage.css";
function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
