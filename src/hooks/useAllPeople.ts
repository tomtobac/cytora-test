import { useEffect, useRef, useState } from 'react';
import { getAllPeople } from '../services/peopleService';
import { withPagination } from '../types/pagination';
import { People } from '../types/people';
import { getIdFromUrl } from '../utils';

export const useAllPeople = () => {
	const [results, setResults] = useState<withPagination<People>>();
	const [isLoading, setIsLoading] = useState(false);
	const abortControllerRef = useRef<AbortController>();

	const fetchPeople = async (params?: { [key: string]: any }) => {
		setIsLoading(true);
		try {
			abortControllerRef.current = new AbortController();
			const response = await getAllPeople(
				params,
				abortControllerRef.current.signal
			);
			setResults(response);
		} catch {
			// @todo: handle error
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPeople();
		return () => abortControllerRef.current?.abort();
	}, []);

	const hasNextPage = Boolean(results?.next);
	const hasPreviousPage = Boolean(results?.previous);

	const onNextPage = () => {
		if (!hasNextPage) {
			return;
		}
		const pageId = getIdFromUrl(results!.next as string);
		fetchPeople({ page: pageId });
	};

	const onPreviousPage = () => {
		if (!hasPreviousPage) {
			return;
		}
		const pageId = getIdFromUrl(results!.previous as string);
		fetchPeople({ page: pageId });
	};

	return {
		people: results?.results,
		isLoading,
		hasNextPage,
		onNextPage,
		hasPreviousPage,
		onPreviousPage,
	};
};
