import { useEffect, useState } from "react";
import { fetchUserLocationData } from "../config";

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState({
    district: null,
    state: null,
    country: null,
  });

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const data = await fetchUserLocationData();
        setUserLocation({
          district: data.district,
          state: data.state,
          country: data.country,
        });
      } catch (error) {
        console.error("Error fetching user location data:", error);
      }
    };

    fetchLocationData();
  }, []);

  return userLocation;
};
