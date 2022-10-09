import { useEffect, useRef, useState } from "react";
import { withPagination } from "@domain/pagination";
import { debounce, getIdFromUrl } from "@utils/index";
import { Vehicle } from "@domain/vehicle";
import { getVehicles } from "@services/vehicleService";
import axios from "axios";

export const useVehicles = () => {
  const [results, setResults] = useState<withPagination<Vehicle>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef<AbortController>();

  const fetchVehicles = async (params?: { [key: string]: any }) => {
    setIsLoading(true);
    try {
      abortControllerRef.current = new AbortController();
      const response = await getVehicles(
        params,
        abortControllerRef.current.signal
      );
      setResults(response);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
    return () => abortControllerRef.current?.abort();
  }, []);

  const onSearch = (search: string) => fetchVehicles({ search });
  const onClear = () => fetchVehicles();

  const hasNextPage = Boolean(results?.next);
  const hasPreviousPage = Boolean(results?.previous);

  const onNextPage = () => {
    if (!results?.next) {
      return;
    }
    const pageId = getIdFromUrl(results.next);
    fetchVehicles({ page: pageId });
  };

  const onPreviousPage = () => {
    if (!results?.previous) {
      return;
    }
    const pageId = getIdFromUrl(results.previous);
    fetchVehicles({ page: pageId });
  };

  return {
    vehicles: results?.results || [],
    hasError: error,
    isLoading,
    hasNextPage,
    onNextPage,
    hasPreviousPage,
    onPreviousPage,
    onSearch: debounce(onSearch, 500),
    onClear,
  };
};
