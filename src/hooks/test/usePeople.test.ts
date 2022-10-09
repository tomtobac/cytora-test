import { Mock, Mocked, vi } from "vitest";
import { getPeople } from "@services/peopleService";
import { renderHook, waitFor } from "@testing-library/react";
import { usePeople } from "../usePeople";

vi.mock("@services/peopleService");
const getPeopleMocked = getPeople as Mock;

describe("usePeople", () => {
  it("should fetch getPeople with an Id when is mounted", async () => {
    getPeopleMocked.mockResolvedValue({});
    const { result } = renderHook(usePeople, { initialProps: 2 });
    expect(getPeopleMocked).toBeCalledTimes(1);
    const { signal } = new AbortController();
    expect(getPeopleMocked).toBeCalledWith(2, signal);
    expect(result.current.character).toBe(undefined);
    expect(result.current.hasError).toBe(false);
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.hasError).toBe(false);
      expect(result.current.character).toEqual({});
    });
  });
  it("should return an error if api call fails", async () => {
    getPeopleMocked.mockRejectedValue("test");
    const { result } = renderHook(usePeople, { initialProps: 1 });
    expect(getPeopleMocked).toBeCalledTimes(1);
    expect(result.current.character).toBe(undefined);
    expect(result.current.hasError).toBe(false);
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.hasError).toBe(true);
      expect(result.current.character).toBe(undefined);
    });
  });
});
