import { useState } from "react";
import newYear from './assets/2021.png';
import fireWorks from './assets/fireworks.png';
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
            <img className="fire-works" src={fireWorks} alt="fireworks"/>
          </div>
          <div className="letter-face front letter-image">
            <img src={newYear} alt="" />
          </div>
          <div className="letter-face back">
            <section className="card-text">
              <div className="top">
                <h6>To</h6>
                <h6>A Random Visitor</h6>
              </div>
              <p>We wish you a very happy and prosperous new year 2021</p>
              <div className="bottom">
                <h6>From</h6>
                <h6>The Dev Team</h6>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
