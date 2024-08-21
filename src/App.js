// import React from'react';
// //rotas
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// //pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// //componentes
// import Navbar from './components/Navbar';
// import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
// rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
// loading animation
import LoadingAnimation from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to show the loading animation
  
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time if needed

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    AOS.init({
      //duration: 1000, // Duration of animation
      //easing: 'ease-in-out', // Easing function
      duration: 2000, // Animation di duration
      easing: 'ease-in-out', // Animation di easing
      once: true,
    });
  }, []);

  return (
    <>
      {loading && <LoadingAnimation setLoading={setLoading} />}
      {!loading && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
      <Footer />
    </>
  );
}

export default App;
