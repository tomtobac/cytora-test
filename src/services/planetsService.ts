import { withPagination } from '../types/pagination';
import { Planet } from '../types/planet';
import configure from './api';

export async function getPlanets(
	params?: { [key: string]: any },
	signal?: AbortSignal
) {
	const api = await configure();
	const response = await api.get<withPagination<Planet>>('/planets', {
		params,
		signal,
	});
	return response.data;
}

export async function getPlanet(id: number, signal?: AbortSignal) {
	const api = await configure();
	const response = await api.get<Planet>('/planets/' + id, { signal });
	return response.data;
}
