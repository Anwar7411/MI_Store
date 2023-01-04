import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <AllRoutes />
      </div>
      <div>
         <Footer />
      </div>     
    </div>

  );
}

export default App;
