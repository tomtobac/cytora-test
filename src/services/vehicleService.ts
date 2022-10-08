import { withPagination } from '../domain/pagination';
import { Vehicle } from '../domain/vehicle';
import api from './api';

export async function getVehicles(
	params?: { [key: string]: any },
	signal?: AbortSignal
) {
	const response = await api.get<withPagination<Vehicle>>('/vehicles', {
		params,
		signal,
	});
	return response.data;
}

export async function getVehicle(id: number, signal?: AbortSignal) {
	const response = await api.get<Vehicle>('/vehicles/' + id, { signal });
	return response.data;
}
