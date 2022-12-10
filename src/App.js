import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Uslugi from './pages/Uslugi';
import Skidka from './pages/Skidka';
import SkidkaDetails from './pages/SkidkaDetails';
import ScoreService from './pages/ScoreService';
import PriceList from './pages/PriceList';
import PriceDetail from './pages/PriceDetail';
import FotoGalereya from './pages/FotoGalereya';
import GalereyaDetails from './pages/GalereyaDetails';
import OurDoctors from './pages/OurDoctors';
import Doctors from './pages/Doctors';
import DoctorDetails from './pages/DoctorDetails';

function App() {
  return (
    <div className="App">
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uslugi/:name" element={<Uslugi />} />
        <Route path="/uslugi/:name/o-nas" element={<About />} />
        <Route path="/uslugi/:name/aksi" element={<Skidka />} />
        <Route path="/uslugi/:name/nashi-vrachi" element={<OurDoctors />} />
        <Route path="/uslugi/:name/nashi-vrachi/:doctors" element={<Doctors />} />
        <Route path="/uslugi/:name/nashi-vrachi/:doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="/uslugi/:name/foto-galereya" element={<FotoGalereya />} />
        <Route path="/uslugi/:name/foto-galereya/:galery" element={<GalereyaDetails />} />
        <Route path="/uslugi/:name/aksi/:id" element={<SkidkaDetails />} />
        <Route path="/uslugi/:name/otsenki-uslug" element={<ScoreService />} />
        <Route path="/uslugi/:name/price-list" element={<PriceList />} />
        <Route path="/uslugi/:name/price-list/:prices" element={<PriceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
