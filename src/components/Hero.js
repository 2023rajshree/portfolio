import React, { useEffect, useMemo, useState } from "react";
import illustrate from "../assets/illustrate.jpeg";

export default function Hero() {

  const messages = useMemo(() => [
    { command: "console.log", text: '"hello there!"' },
    { command: "alert", text: '"How are you?"' },
    { command: "document.write", text: '"Welcome to my React app!"' },
    { command: "console.warn", text: '"Woman at work!"' },
  ], []);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    const fullText = `${currentMessage.command}(${currentMessage.text})`;
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (charIndex === fullText.length) {
      const pauseBeforeDelete = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(pauseBeforeDelete);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }
  }, [charIndex, isDeleting, currentMessageIndex, messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDeleting(true);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container bg-linear pt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 text-center">
            <img
              src={illustrate}
              className="circle-image"
              alt="Rajshree Tungare"
            />
            <h1>Rajshree Tungare</h1>
            <h2>Web Developer</h2>
            <div>
              <button
                className="btn"
                onClick={() =>
                  (window.location.href =
                    "mailto:tungare.rajshree@gmail.com?subject=Are%20You%20Ready%20for%20the%20Best%20Email%20of%20Your%20Day%3F")
                }
              >
                Get in touch
              </button>
              <button className="btn">Download Resume</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="console-box bg-dark text-white rounded">
              <div className="button-container">
                <span className="button-red"></span>
                <span className="button-yellow"></span>
                <span className="button-green"></span>
              </div>
              <div className="console-text text-break text-center">
                <h4 className="typewriter d-inline-block">
                  {displayedText}
                  <span className="cursor-console"></span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="construction-tape mt-5">
        <span>Under Construction</span>
      </div>
    </section>
  );
}
