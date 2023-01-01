import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AllProducts from "./components/AllProducts";
import SingleProductview from "./pages/SingleProductview";

function App() {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div>
      <div>
        <AllRoutes />
      </div>
      <div>
         <Footer />
      </div>      */}
      <SingleProductview />
    </div>

  );
}

export default App;
