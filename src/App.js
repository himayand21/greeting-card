import { useState } from "react";
import "./styles/app.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <div className={`envlope-wrapper${isOpen ? ' open' : ''}`} onClick={() => {setIsOpen(!isOpen)}}>
        <div className="envelope">
          <div className="front flap" />
          <div className="front pocket" />
          <div className="back" />
        </div>
        <div className="letter" />
      </div>
    </div>
  );
}

export default App;
