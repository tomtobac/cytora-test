import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getPeople } from "@services/peopleService";
import { People } from "@domain/people";

export function usePeople(id: number) {
  const [character, setCharacter] = useState<People>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef<AbortController>();

  async function fetchCharacter(id: number) {
    setIsLoading(true);
    try {
      abortControllerRef.current = new AbortController();
      const response = await getPeople(id, abortControllerRef.current.signal);
      setCharacter(response);
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
    fetchCharacter(id);
    return () => abortControllerRef.current?.abort();
  }, [id]);

  return { character, isLoading, hasError: error };
}
