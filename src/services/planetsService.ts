import { withPagination } from "@domain/pagination";
import { Planet } from "@domain/planet";
import api from "./api";

export async function getPlanets(
  params?: { [key: string]: any },
  signal?: AbortSignal
) {
  const response = await api.get<withPagination<Planet>>("/planets", {
    params,
    signal,
  });
  return response.data;
}

export async function getPlanet(id: number, signal?: AbortSignal) {
  const response = await api.get<Planet>("/planets/" + id, { signal });
  return response.data;
}
