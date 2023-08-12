import { useEffect, useState } from "react";

const useLocationStatus = () => {
  const [isLocationOn, setIsLocationOn] = useState(null);

  useEffect(() => {
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
  }, []);

  return isLocationOn;
};

export default useLocationStatus;
