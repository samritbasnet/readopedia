import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1">
        {/* Main content of your app goes here */}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
