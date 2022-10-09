import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getVehicle } from "@services/vehicleService";
import { Vehicle } from "@domain/vehicle";

export function useVehicle(id: number) {
  const [vehicle, setVehicle] = useState<Vehicle>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef<AbortController>();

  async function fetchVehicle(id: number) {
    setIsLoading(true);
    try {
      abortControllerRef.current = new AbortController();
      const response = await getVehicle(id, abortControllerRef.current.signal);
      setVehicle(response);
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.log(err);
        setError(true);
      }
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchVehicle(id);
    return () => abortControllerRef.current?.abort();
  }, [id]);

  return { vehicle, isLoading, hasError: error };
}
