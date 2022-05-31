
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <div>
       <Outlet/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
