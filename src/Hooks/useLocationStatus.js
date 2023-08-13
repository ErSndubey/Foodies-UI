import { useEffect, useState } from "react";

const useLocationStatus = () => {
  const [isLocationOn, setIsLocationOn] = useState(null);

  useEffect(() => {
    const checkLocationStatus = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          () => {
            setIsLocationOn(true);
          },
          () => {
            setIsLocationOn(false);
          }
        );
      } else {
        setIsLocationOn(false);
      }
    };

    // Initial check
    checkLocationStatus();

    // Periodically check every 4 seconds
    const interval = setInterval(checkLocationStatus, 3000);

    return () => clearInterval(interval);
  }, []);

  return isLocationOn;
};

export default useLocationStatus;
