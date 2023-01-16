import AllRoutes from "./routes/AllRoutes"
import Navbar from "./components/navbar&footer/Navbar";
import Footer from './components/navbar&footer/Footer';

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
