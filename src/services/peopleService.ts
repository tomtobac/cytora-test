import { withPagination } from "@domain/pagination";
import type { People } from "@domain/people";
import api from "./api";

export async function getAllPeople(
  params?: { [key: string]: any },
  signal?: AbortSignal
) {
  const response = await api.get<withPagination<People>>("/people", {
    params,
    signal,
  });
  return response.data;
}

export async function getPeople(id: number, signal?: AbortSignal) {
  const response = await api.get<People>("/people/" + id, { signal });
  return response.data;
}
