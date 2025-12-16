import AdventGrid from "./components/AdventGrid";
import "./App.css";
import Snowfall from "./components/Snowfall";
import SnowBottom from "./components/SnowBottom";
export default function App() {
  return (
    <main>
      <SnowBottom />
      <h1>Le caLuümdrier de l’Avent 🎄</h1>
      <p>Mes chers Luümtins,</p>
      <p>
        Vous avez été très sages cette année, alors voici quelques souvenirs, en
        attendant le grand jour !
      </p>
      <AdventGrid />

      <Snowfall count={50} />
    </main>
  );
}
