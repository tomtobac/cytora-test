import { useEffect, useRef, useState } from 'react';
import { getAllPeople } from '@services/peopleService';
import { withPagination } from '@domain/pagination';
import { People } from '@domain/people';
import { debounce, getIdFromUrl } from '@utils/index';
import axios from 'axios';

export const useAllPeople = () => {
	const [results, setResults] = useState<withPagination<People>>();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
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
		} catch (err) {
			if (!axios.isCancel(err)) {
				setError(true);
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPeople();
		return () => abortControllerRef.current?.abort();
	}, []);

	const onSearch = (search: string) => fetchPeople({ search });
	const onClear = () => fetchPeople();

	const hasNextPage = Boolean(results?.next);
	const hasPreviousPage = Boolean(results?.previous);

	const onNextPage = () => {
		if (!results?.next) {
			return;
		}
		const pageId = getIdFromUrl(results.next);
		fetchPeople({ page: pageId });
	};

	const onPreviousPage = () => {
		if (!results?.previous) {
			return;
		}
		const pageId = getIdFromUrl(results.previous);
		fetchPeople({ page: pageId });
	};

	return {
		people: results?.results || [],
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
