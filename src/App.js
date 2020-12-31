import { useState } from "react";
import "./styles/app.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFalling, setIsFalling] = useState(false);

  function openEnv() {
    if(!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsFalling(true);
      }, 1500);
    }
  }

  return (
    <div className="app">
      <div
        className={`envlope-wrapper ${isOpen && 'open'} ${isFalling && 'falling'}`} 
        onClick={openEnv}
      >
        <div className="envelope">
          <div className="front flap" />
          <div className="front pocket" />
          <div className="back" />
        </div>
        <div className="letter">
          <div className="letter-face front">
            <p>Wish you a very happy new year from your favourite teacher. I hope you stay safe and progressive.
              Blah and blah blah blah and blah
            </p>
          </div>
          <div className="letter-face back">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
