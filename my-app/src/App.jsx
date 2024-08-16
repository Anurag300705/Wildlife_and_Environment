import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Section01 from './components/Section01'
//import NEW_BORN from './components/pages/NEW_BORN_COMP/NEW_BORN'
import Section2 from './components/events/App'
import About from './components/pages/About';
import Service from './components/pages/Service';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <><Navbar/>
              <Section01 />
              <Section2 />
              </>
} />
     <Route path="/About" element={<About/>}/>
     <Route path="/Service" element={<Service/>}/>
     <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
