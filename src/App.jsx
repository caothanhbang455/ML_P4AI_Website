import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Assignment1 from './pages/Assignment1';

function App() {
  return (
    <Router basename="/ML_P4AI_Website">
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow bg-slate-50/50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignment-1" element={<Assignment1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;