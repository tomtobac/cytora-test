import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getPlanet } from "../services/planetsService";
import { Planet } from "../domain/planet";

export function usePlanet(id: number) {
  const [planet, setPlanet] = useState<Planet>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef<AbortController>();

  async function fetchPlanet(id: number) {
    setIsLoading(true);
    try {
      abortControllerRef.current = new AbortController();
      const response = await getPlanet(id, abortControllerRef.current.signal);
      setPlanet(response);
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
    fetchPlanet(id);
    return () => abortControllerRef.current?.abort();
  }, [id]);

  return { planet, isLoading, hasError: error };
}
