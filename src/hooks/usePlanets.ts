import { useEffect, useRef, useState } from 'react';
import { getPlanets } from '@services/planetsService';
import { withPagination } from '@domain/pagination';
import { Planet } from '@domain/planet';
import { debounce, getIdFromUrl } from '@utils/index';
import axios from 'axios';

export const usePlanets = () => {
	const [results, setResults] = useState<withPagination<Planet>>();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const abortControllerRef = useRef<AbortController>();

	const fetchPlanets = async (params?: { [key: string]: any }) => {
		setIsLoading(true);
		try {
			abortControllerRef.current = new AbortController();
			const response = await getPlanets(
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
		fetchPlanets();
		return () => abortControllerRef.current?.abort();
	}, []);

	const onSearch = (search: string) => fetchPlanets({ search });
	const onClear = () => fetchPlanets();

	const hasNextPage = Boolean(results?.next);
	const hasPreviousPage = Boolean(results?.previous);

	const onNextPage = () => {
		if (!results?.next) {
			return;
		}
		const pageId = getIdFromUrl(results.next);
		fetchPlanets({ page: pageId });
	};

	const onPreviousPage = () => {
		if (!results?.previous) {
			return;
		}
		const pageId = getIdFromUrl(results.previous);
		fetchPlanets({ page: pageId });
	};

	return {
		planets: results?.results || [],
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
