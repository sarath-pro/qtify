import './App.css';
import Hero from './components/Hero';
import Navbar from "./components/Navbar"
import Content from "./components/Content/Content"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
