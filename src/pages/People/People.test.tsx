import { WithMemoryRouting } from "@test/utils";
import { render, screen } from "@testing-library/react";
import { useAllPeople } from "@hooks/useAllPeople";
import { Mock, vi } from "vitest";
import { People } from "./People";

vi.mock("@hooks/useAllPeople");

const useAllPeopleMocked = useAllPeople as Mock;

describe("People Page", () => {
  it("should render a list of people", () => {
    const people = [
      {
        name: "Anakim Skywalker",
        url: "http://test.com/people/1",
      },
      {
        name: "Darth Vader",
        url: "http://test.com/people/2",
      },
    ];
    useAllPeopleMocked.mockReturnValue({
      people,
      isLoading: false,
      hasNextPage: false,
      onNextPage: vi.fn(),
      hasPreviousPage: false,
      onPreviousPage: vi.fn(),
      onSearch: vi.fn(),
      onClear: vi.fn(),
    });
    render(
      <WithMemoryRouting>
        <People />
      </WithMemoryRouting>
    );
    people.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
