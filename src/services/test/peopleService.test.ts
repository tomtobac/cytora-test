import { Mocked, vi } from "vitest";
import { AxiosInstance } from "axios";
import { Route } from "@domain/Route";
import api from "@services/api";
import { getAllPeople } from "../peopleService";

vi.mock("@services/api");

const apiMocked = api as Mocked<AxiosInstance>;

describe("People Service", () => {
  describe("Get All People", () => {
    it("should return all people", async () => {
      const mockResponse = {
        count: 0,
        next: null,
        previous: null,
        results: [],
      };
      apiMocked.get.mockResolvedValue({ data: mockResponse });
      const signal = { aborted: false } as AbortSignal;
      const result = await getAllPeople({ page: 2, signal });
      expect(api.get).toHaveBeenCalledWith(Route.People, {
        params: { page: 2, signal },
      });
      expect(result).toEqual(mockResponse);
    });
  });
});
