import './App.css';
import { Hero } from './components/Hero';
import MeetPeperuney from './components/MeetPeperuney';
import ClickToEarn from './components/ClickToEarn'
import HowToBuy from './components/HowToBuy'
import PeperuneyContinue from './components/PeperuneyContinue'
import OurPartners from './components/OurPartners'
import Faq from './components/Faq'
import Pizzanomics from './components/Pizzanomics'
import JoinTheCult from './components/JoinTheCult';
import PeperuneyToons from './components/PeperuneyToons';

function App() {
  return (
    <div>
      <Hero />
      <MeetPeperuney />
      <HowToBuy />
      <PeperuneyContinue />
      <Pizzanomics/>
      <ClickToEarn />
      <PeperuneyToons/>
      <OurPartners />
      <Faq />
      <JoinTheCult/>
    </div>
  );
}

export default App;
