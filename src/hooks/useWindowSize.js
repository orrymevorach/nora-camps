import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [device, setDevice] = useState("");
  useEffect(() => {
    function getDevice() {
      let device = "";
      if (window.innerWidth <= 850) device = "mobile";
      if (window.innerWidth <= 1000 && window.innerWidth > 850)
        device = "tablet";
      if (window.innerWidth > 1000) device = "desktop";
      setDevice(device);
    }

    window.addEventListener("resize", getDevice);
    getDevice();

    return () => window.removeEventListener("resize", getDevice);
  }, []);
  return {
    device,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}
