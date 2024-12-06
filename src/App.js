import logo from './logo.svg';
import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

function App() {
  return (
    <div className="main-body">
      <div className="aura" style={{ left: "616px", top: "109px"}}></div>
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
