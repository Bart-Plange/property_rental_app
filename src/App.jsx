// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutPage, ContactPage, Homepage, MortgagePage, PropertyPage, TourPage} from './pages'
import {Navbar,Footer } from './components';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/mortgage' element={<MortgagePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/properties' element ={<PropertyPage/>}/>
          <Route path='/about' element ={<AboutPage/>}/>
          <Route path="/tour/:propertyId" element={<TourPage/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
