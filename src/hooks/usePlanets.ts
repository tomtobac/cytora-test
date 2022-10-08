import { useEffect, useState } from 'react';
import { getPlanets } from '../services/planetsService';
import { withPagination } from '../types/pagination';
import { Planet } from '../types/planet';
import { getIdFromUrl } from '../utils';

export const usePlanets = () => {
	const [results, setResults] = useState<withPagination<Planet>>();
	const [isLoading, setIsLoading] = useState(false);

	const fetchPlanets = async (params?: { [key: string]: any }) => {
		setIsLoading(true);
		try {
			const response = await getPlanets(params);
			setResults(response);
		} catch {
			// @todo: handle error
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPlanets();
	}, []);

	const hasNextPage = Boolean(results?.next);
	const hasPreviousPage = Boolean(results?.previous);

	const onNextPage = () => {
		if (!hasNextPage) {
			return;
		}
		const pageId = getIdFromUrl(results!.next as string);
		fetchPlanets({ page: pageId });
	};

	const onPreviousPage = () => {
		if (!hasPreviousPage) {
			return;
		}
		const pageId = getIdFromUrl(results!.previous as string);
		fetchPlanets({ page: pageId });
	};

	return {
		planets: results?.results || [],
		isLoading,
		hasNextPage,
		onNextPage,
		hasPreviousPage,
		onPreviousPage,
	};
};
