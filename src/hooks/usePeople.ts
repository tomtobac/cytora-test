import { useEffect, useRef, useState } from 'react';
import { getPeople } from '../services/peopleService';
import { People } from '../types/people';

export function usePeople(id: number) {
	const [character, setCharacter] = useState<People>();
	const [isLoading, setIsLoading] = useState(false);
	const abortControllerRef = useRef<AbortController>();

	async function fetchCharacter(id: number) {
		setIsLoading(true);
		try {
			abortControllerRef.current = new AbortController();
			const response = await getPeople(id, abortControllerRef.current.signal);
			setCharacter(response);
		} catch {
			// @todo: handle error
		} finally {
			setIsLoading(false);
		}
	}
	useEffect(() => {
		fetchCharacter(id);
		return () => abortControllerRef.current?.abort();
	}, [id]);

	return { character, isLoading };
}
