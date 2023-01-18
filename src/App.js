import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Swap from './pages/Swap';
import Airdrop from './pages/Airdrop';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

function App() {
  return (
    <Router>
      <Navbar />
      <Modal />
       <Routes>
           <Route  index path='/' element={<Home />}/>
           <Route  path='/swap' element={<Swap />}/>
           <Route  path='/stake' element={<Stake />}/>
           <Route  path='/airdrop' element={<Airdrop />}/>
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
