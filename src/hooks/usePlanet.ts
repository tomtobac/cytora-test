import { useEffect, useState } from 'react';
import { getPlanet } from '../services/planetsService';
import { Planet } from '../types/planet';

export function usePlanet(id: number) {
	const [planet, setPlanet] = useState<Planet>();
	const [isLoading, setIsLoading] = useState(false);

	async function fetchPlanet(id: number) {
		setIsLoading(true);
		try {
			const response = await getPlanet(id);
			setPlanet(response);
		} catch {
			// @todo: handle error
		} finally {
			setIsLoading(false);
		}
	}
	useEffect(() => {
		fetchPlanet(id);
	}, [id]);

	return { planet, isLoading };
}
