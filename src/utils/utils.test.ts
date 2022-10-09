import { getIdFromUrl } from "./";

describe("Utils", () => {
  describe("getIdFromUrl", () => {
    it("should return an number from an url", () => {
      [
        { url: "https://swapi.dev/api/films/2/", expected: "2" },
        { url: "https://swapi.dev/api/starships/6/", expected: "6" },
        { url: "https://swapi.dev/api/planets/3/", expected: "3" },
        { url: "https://swapi.dev/api/species/1/", expected: "1" },
        { url: "https://swapi.dev/api/people/7", expected: "7" },
      ].forEach(({ url, expected }) => {
        expect(getIdFromUrl(url)).toBe(expected);
      });
    });
    it("should return undefined if no number is present", () => {
      expect(getIdFromUrl("https://swapi.dev/api/people")).toBe(undefined);
    });
  });
});
