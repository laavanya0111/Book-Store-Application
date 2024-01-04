
import './App.css';
import Navbar from './components/Navbar';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import Cart from './pages/Cart';
import BooksId from './pages/BooksId';
import footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/addbooks' element={<AddBooks />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/BooksId' element={<BooksId />} />
      </Routes>
      <footer />
    </Router>
  );
}

export default App;
