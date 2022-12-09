import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SharedNavbar from './components/SharedNavbar';
import SingleCocktail from './pages/SingleCocktail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedNavbar />}>
          <Route exact index element={<Home />} />
          <Route path='about' element={<About />} />

          {/* use this method below for nested nested links or the next method after */}
          {/* <Route path='cocktail/:id' element={<SingleCocktail />} /> */}

          {/* second method */}
           <Route path=':id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
