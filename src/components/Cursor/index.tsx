import React, { useEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";

import "../Hero/styles/cursor.scss";
import CursorContext from "../../context/CursorContext";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentVideo, setCurrentVideo } = useContext(CursorContext);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "Power3.easeOut",
      });
      if (currentVideo) {
        gsap.to(videoRef.current, {
          duration: 1,
          ease: "Power3.easeInOut",
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [currentVideo]);

  const renderVideo = () => {
    console.log(currentVideo);
    if (!currentVideo) return null;

    return (
      <video
        ref={videoRef}
        src={`../../../public/assets/videos/${currentVideo}.mp4`}
        preload="auto"
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          height: "350px",
          borderRadius: "100%",
        }}
      />
    );
  };

  return (
    <div ref={cursorRef} className="cursor">
      {renderVideo()}
    </div>
  );
};

export default Cursor;
