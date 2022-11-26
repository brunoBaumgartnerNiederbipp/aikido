import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Auswahl from './components/auswahl';
import Dan from './components/dan';
import Kyu from './components/kyu';
import Kyu6 from './components/kyu6';
import Kyu5 from './components/kyu5';
import Kyu4 from './components/kyu4';
import Kyu3 from './components/kyu3';
import Kyu2 from './components/kyu2';
import Kyu1 from './components/kyu1';
import Dan1 from './components/dan1';
import Dan2 from './components/dan2';
import Dan3 from './components/dan3';
import Dan4 from './components/dan4';
import Phil from './components/philosophie';
import Geschichte from './components/geschichte';
import Impressum from './components/impressum';
import Hakama from './components/hakama';



function App() {
  return (
   <Router>
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/auswahl" element={<Auswahl/>} />
      <Route exact path='/kyu' element={<Kyu/>} />
      <Route exact path='/dan' element={<Dan/>} />
      <Route exact path='/kyu6' element={<Kyu6/>} />
      <Route exact path='/kyu5' element={<Kyu5/>} />
      <Route exact path='/kyu4' element={<Kyu4/>} />
      <Route exact path='/kyu3' element={<Kyu3/>} />
      <Route exact path='/kyu2' element={<Kyu2/>} />
      <Route exact path='/kyu1' element={<Kyu1/>} />
      <Route exact path='/dan4' element={<Dan4/>} />
      <Route exact path='/dan3' element={<Dan3/>} />
      <Route exact path='/dan2' element={<Dan2/>} />
      <Route exact path='/dan1' element={<Dan1/>} />
      <Route exact path='/philosophie' element={<Phil/>} />
      <Route exact path='/geschichte' element={<Geschichte/>} />
      <Route exact path='/impressum' element={<Impressum/>} />
      <Route exact path='/hakama' element={<Hakama/>} />
      </Routes>
    </Router>
  );
}

export default App;
