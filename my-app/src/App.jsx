import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Section01 from './components/Section01'
import NEW_BORN from "./components/pages/NEW_BORN_COMP/NEW_BORN";
import Container from './components/events/container'
import About from './components/pages/About';
import Service from './components/pages/Service';
import ContactUs from './components/pages/ContactUs';
import Section03 from './components/Section03';
import Exchange from "./components/pages/EXCHANGE_COMP/EXCHANGE";
import Rescue from "./components/pages/RESCUE_COMP/RESCUE";
import LoginForm from './components/Login/Components/LoginForm';
import Login2 from './components/Login/Components/Login2';
import Forgot from './components/Login/Components/Forgot';
import './index.css';
import Section04 from './components/Section04';
import  Event  from './components/pages/event/event';
import Book from './components/pages/event/components/Book';
import SpclAnmls from "./components/pages/SPECIAL_ANIMALS/Special.jsx";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Section01 />
              <Container />
              <Section03 />
              <Section04 />
              
              
            </>
          } />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/NEW_BORN" element={<NEW_BORN />} />
          <Route path="/rescue" element={<Rescue />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/book" element={<Book />} />
          <Route path="/SpecialAnimals" element={<SpclAnmls />} />

        </Routes>
      </Router>



    </>
  )
}

export default App;






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

//  export default App;