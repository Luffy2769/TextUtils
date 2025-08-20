// import Silk from './Silk';
import Navbar from './Components/Navbar'
import TextForms from './Components/TextForms'
import About from './Components/About';
import './App.css'
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  const toggleGrad = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'linear-gradient(135deg, #a8a8a8 0%, #4caf50 100%)';
      showAlert("Gradient mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <Router>
      <div className="app-container">
        <div className="background">
          {/* <Silk 
    speed={5}
        scale={1}
        color="#14f7f7ff"
        noiseIntensity={1.0}
        rotation={0}/> */}
        </div>
        <div className="content">
          <Navbar mode={mode} toggleMode={toggleMode} toggleGrad={toggleGrad} />
          <Alert alert={alert} />
          <div className="content2 my-4">

            <Routes>
              <Route path="/" element={<TextForms showAlert={showAlert} title="Enter your text to analyze" />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App