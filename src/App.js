import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import {UserAuthContextProvider} from './context/UserAuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AuthDetail from './components/auth/AuthDetail';
import Cart from './pages/Cart';
import CartContext from './context/CartContext';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <CartContext>
     <Header /> 
     <Routes>
      <Route path="/" element={
          <ProtectedRoute> 
              <Home /> 
          </ProtectedRoute>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/autDetail" element={<AuthDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </CartContext>
    </UserAuthContextProvider>
    </div>
  );
}

export default App;
