// import Logo from './components/Logo/Logo';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section
  title="Top Albums"
  endpoint="https://qtify-backend-labs.crio.do/albums/top"
  showCollapse={true}
/>

<Section
  title="New Albums"
  endpoint="https://qtify-backend-labs.crio.do/albums/new"
  showCollapse={true}
/>
    </div>
  );
}

export default App;
