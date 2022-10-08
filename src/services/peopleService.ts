import { withPagination } from '../types/pagination';
import { People } from '../types/people';
import configure from './api';

export async function getAllPeople(
	params?: { [key: string]: any },
	signal?: AbortSignal
) {
	const api = await configure();
	const response = await api.get<withPagination<People>>('/people', {
		params,
		signal,
	});
	return response.data;
}

export async function getPeople(id: number, signal?: AbortSignal) {
	const api = await configure();
	const response = await api.get<People>('/people/' + id, { signal });
	return response.data;
}
