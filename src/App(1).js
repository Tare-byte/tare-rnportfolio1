import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contacts';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/layout.js'
import Sidebar from './components/sidebar';
 
function App() {
  return (
    <>
    <Sidebar />
   <Routes>
    <Route path='/' element={<Layout />} />
    <Route index element={<Home />} />
     <Route path='about' element={<About/>} />
     <Route path='Contacts' element={<Contact/>} />

     </Routes>
     </>

  );
}

export default App;
