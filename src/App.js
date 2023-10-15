import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import FootMasaje from './pages/FootMasaje/FootMasaje';
import CurpoMasaje from './pages/CurpoMesaje/CurpoMesaje';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/footmasaje" element={<FootMasaje />} />
          <Route path="/bodymasaje" element={<CurpoMasaje />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
