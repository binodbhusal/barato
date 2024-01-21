import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Singleproduct from './components/SingleProduct/SingleProduct';
import NewsLetter from './components/Footer/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import AppContext from './utils/context';
import Success from './components/Cart/Success';

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/singleproduct/:id" element={<Singleproduct />} />
          <Route path="/success" element={<Success />} />

        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>

    </BrowserRouter>
  );
}

export default App;
