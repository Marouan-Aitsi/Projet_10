import './App.css';
import { Header } from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import { Footer } from './components/Footer/Footer';
import { Signin } from '../src/pages/Signin/Signin'
import { User } from '../src/pages/User/User'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signin/Signin' element={<Signin />} />
        <Route path='/User/User' element={<User />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
