import React, { useRef, useEffect, useState, useContext } from "react";
import gsap from "gsap";
import "./Hero.scss";
import Cursor from "../Cursor";
import "./styles/cursor.scss";
import CursorContext from "../../context/CursorContext";

function Hero() {
  const { currentVideo, setCurrentVideo } = useContext(CursorContext);
  const [websitesColor, setWebsitesColor] = useState<string>("inherit");
  const [appsColor, setAppsColor] = useState<string>("inherit");
  const [brandingColor, setBrandingColor] = useState<string>("inherit");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = gsap.timeline({ paused: true });

  const openMenu = () => {
    setIsMenuOpen(true);
    // GSAP animation to open the menu
    tl.play();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // GSAP animation to close the menu
    tl.reverse();
  };
  const hoverIntervalRef = useRef<number | null>(null);
  const intervalRefs = useRef<{ [key: string]: number | null }>({
    websites: null,
    apps: null,
    branding: null,
  });
  const startColorChange = (category: string) => {
    clearIntervals();
    intervalRefs.current[category] = setInterval(() => {
      const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      if (category === "websites") setWebsitesColor(newColor);
      else if (category === "apps") setAppsColor(newColor);
      else if (category === "branding") setBrandingColor(newColor);
    }, 2000);
  };

  const handleHover = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
    startColorChange(videoSrc);
  };

  const handleMouseLeave = () => {
    setCurrentVideo("");
    clearIntervals();
  };

  const clearIntervals = () => {
    Object.values(intervalRefs.current).forEach((interval) => {
      if (interval) clearInterval(interval);
    });
    setWebsitesColor("inherit");
    setAppsColor("inherit");
    setBrandingColor("inherit");
  };

  useEffect(() => {
    tl.to(".overlayMenu", {
      duration: 0.5,
      x: 0,
      ease: "power2.inOut",
    });
    tl.to(".nav", {
      duration: 0.5,
      x: 0,
      ease: "power2.inOut",
      stagger: 0.1,
    });
    tl.reverse();

    return () => clearIntervals();
  }, []);

  return (
    <>
      <Cursor />
      <header>
        <div className="header-inner">
          <div className="header-inner-col left">
            <div className="header-inner-logo">
              <h2>cursorto</h2>
            </div>
          </div>
          <div className="header-inner-col right">
            <div className="header-inner-nav">
              <span className="header-inner-nav-link">showreel</span>
              <div className="header-inner-nav-menu">
                <span className="header-inner-nav-link">menu</span>
                <div
                  className="header-inner-nav-menu-hamburger"
                  onClick={openMenu}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`humburger ${isMenuOpen ? "active" : ""}`}>
        <span 
        
            className="closeMenu"
        onClick={closeMenu}> x</span>
        <div className="overlayMenu">
          <div className="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-inner-banner">
              <div className="hero-inner-col left"></div>
              <div className="hero-inner-col right">
                <div className="hero-inner-title">
                  <h1>We make it happen</h1>
                </div>
                <div className="hero-inner-links">
                  <div
                    data-video-src="websites"
                    className="hero-inner-link-item"
                    onMouseEnter={() => handleHover("websites")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href="/">
                      <span style={{ color: websitesColor }}>Websites</span>
                    </a>
                  </div>
                  <div
                    data-video-src="apps"
                    className="hero-inner-link-item"
                    onMouseEnter={() => handleHover("apps")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href="/">
                      <span style={{ color: appsColor }}>Apps</span>
                    </a>
                  </div>
                  <div
                    data-video-src="branding"
                    className="hero-inner-link-item"
                    onMouseEnter={() => handleHover("branding")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href="/">
                      <span style={{ color: brandingColor }}>Branding</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-inner-footer">
            <div className="hero-inner-footer-text">
              <p>
                All Safe is a large and leading company with strong experience
                in development and design. We build websites from scratch,
                mobile applications, develop online business services and much
                more
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="chat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" id="chat">
          <path d="M16 26c8.84 0 16-5.82 16-13S24.84 0 16 0 0 5.82 0 13a11.72 11.72 0 004.12 8.71L3.33 30l7.53-4.69A19.11 19.11 0 0016 26z"></path>
        </svg>
      </div>
    </>
  );
}

export default Hero;
