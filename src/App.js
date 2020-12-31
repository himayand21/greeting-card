import { useState } from "react";
import newYear from './assets/2021.png';

import "./styles/app.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFalling, setIsFalling] = useState(false);

  function openEnv() {
    if (!isOpen) {
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
          <div className="letter-face front left">
          </div>
          <div className="letter-face front letter-image">
            <img src={newYear} alt="" />
          </div>
          <div className="letter-face back">
            <section className="card-text">
              <h6>Dear Friend</h6>
              <p>
                Happy New Year 2021
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
