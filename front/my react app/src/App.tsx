import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Contact from './components/Contact';
import History from './components/History';
import Achievements from './components/Achievements';
import Ranking from './components/Ranking';
import LastgameDetails from './pages/LastgameDetails';
import NewsDetails from './pages/NewsDetails';
import PicsDetails from './pages/PicsDetails';
import NextgameDetails from './pages/NextgameDetails';
import PlayersDetails from './pages/PlayersDetails';
import CartContextProvider from './context/CartContext'
import ProductDetails from './pages/ProductDetails'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Squad from "./components/Squad";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/schedule" element={< Schedule />} />
          <Route path="/squad" element={<Squad />} />


          <Route path="/news" element={<NewsDetails />} />
          <Route path="/lastgame" element={<LastgameDetails />} />
          <Route path="/pics" element={<PicsDetails />} />
          <Route path="/nextgame" element={<NextgameDetails />} />
          <Route path="/players" element={<PlayersDetails />} />
          
          <Route path="/" element={<Home/>} />
        </Routes>


        <CartContextProvider>
          <Routes>
            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin/*' element={<Admin />} />
            <Route path='/product/:id' element={<ProductDetails />} />

          </Routes>
        </CartContextProvider>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
