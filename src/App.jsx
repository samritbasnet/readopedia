import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './pages/hero';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1">
        {/* Main content of your app goes here */}
        <Hero/>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
