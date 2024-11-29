import './App.css';
import { Hero } from './components/Hero';
import MeetPeperuney from './components/MeetPeperuney';
import ClickToEarn from './components/ClickToEarn'
import HowToBuy from './components/HowToBuy'
import PeperuneyContinue from './components/PeperuneyContinue'


function App() {
  return (
    <div>
      <Hero />
      <MeetPeperuney />
      <ClickToEarn />
      <HowToBuy />
      <PeperuneyContinue/>
    </div>
  );
}

export default App;
