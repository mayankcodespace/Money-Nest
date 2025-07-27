import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';
import MutualFundsPage from './pages/MutualFundsPage';
import FDPage from './pages/FDPage';
import USStocksPage from './pages/USStocksPage';
import CalculatorsPage from './pages/CalculatorsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stocks" element={<StocksPage />} />
            <Route path="/mutual-funds" element={<MutualFundsPage />} />
            <Route path="/fd" element={<FDPage />} />
            <Route path="/us-stocks" element={<USStocksPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 