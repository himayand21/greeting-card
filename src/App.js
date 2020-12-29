import { useState } from "react";
import "./styles/app.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <div className={`envlope-wrapper${isOpen ? ' open' : ''}`} onClick={() => {setIsOpen(!isOpen)}}>
        <div className="envelope">
          <div className="front flap"></div>
          <div className="front pocket"></div>
        </div>
        <div className="letter">
          
          </div>
      </div>
    </div>
  );
}

export default App;
