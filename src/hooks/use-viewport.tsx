import React, { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

const useViewport = () => {
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

export default useViewport;
