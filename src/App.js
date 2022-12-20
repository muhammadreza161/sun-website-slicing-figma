import AchivementComponent from "./component/AchivementComponent";
import CardComponent from "./component/CardComponent";
import GaleryComponent from "./component/GaleryComponent";
import HeroComponent from "./component/HeroComponent";
import NavbarComponent from "./component/NavbarComponent";
import PortfolioComponent from "./component/PortfolioComponent";

function App() {
  return (
    
    <div className="App">
      <NavbarComponent />
      <HeroComponent />
      <CardComponent/>
      <GaleryComponent/>
      <AchivementComponent/>
      <PortfolioComponent/>
    </div>
  );
}

export default App;
