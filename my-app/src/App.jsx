import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Section01 from './components/Section01'
import NEW_BORN from './components/pages/NEW_BORN_COMP/NEW_BORN'
import Container from './components/events/container'
import About from './components/pages/About';
import Service from './components/pages/Service';
import ContactUs from './components/pages/ContactUs';
import Section03 from './components/Section03';
import Exchange from "./components/pages/EXCHANGE_COMP/EXCHANGE";
import Rescue from "./components/pages/RESCUE_COMP/RESCUE";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <><Navbar/>
              <Section01 />
              <Container />
              <Section03></Section03>
              </>
} />
     <Route path="/About" element={<About/>}/>
     <Route path="/Service" element={<Service/>}/>
     <Route path="/ContactUs" element={<ContactUs/>}/>
     <Route path="/exchange" element={<Exchange />}/>
     <Route path="/new-born" element={<NEW_BORN/>}/>
     <Route path="/rescue" element={<Rescue/>}/>

      </Routes>
      </Router>
    </>
  )
}

export default App






// // EXCHANGE_COMP JSX CODE


// function App() {
//   return <Exchange />;
// }

// export default App;






//RESCUE_COMP jsx code


// function App() {
//   return (
//     <Rescue/>
//   );
// }

// export default App;