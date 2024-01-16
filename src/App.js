import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Contact from './components/Contact';
import Doctor from './components/Doctor';
import ViewCard from './components/ViewCard';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<PageNotFound/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/doctor' element={<Doctor/>} />
      <Route path='/view/:id' element={<ViewCard/>}/>
    </Routes>
    <Footer/>
    </>
   
  );
}

export default App;
