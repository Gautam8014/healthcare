// import './App.css';
import { Home } from './Components/Page/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Page/Footer';
import About from './Components/Page/About';
import Testimonials from './Components/Page/Testimonials';
import Doctors from './Components/Page/Doctors';
import Hero from './Components/Page/Hero';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      
     
      
    </div>
  );
}

export default App;
