// CursorContext.js
import React from "react";

const CursorContext = React.createContext({
  currentVideo: "",
  setCurrentVideo: (videoSrc: string) => {},
});

export default CursorContext;
