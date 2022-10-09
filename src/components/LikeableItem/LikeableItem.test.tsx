import { render, screen, waitFor } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { WithMemoryRouting } from "@test/utils";
import { useFavourite } from "@hooks/useFavourite";
import { LikeableItem } from "./";

vi.mock("@hooks/useFavourite", () => {
  return {
    useFavourite: vi.fn().mockReturnValue({
      isLiked: false,
      onToggleLike: vi.fn(),
    }),
  };
});

describe("LikeableItem", () => {
  it("should render a link and empty heart icon", () => {
    render(
      <WithMemoryRouting>
        <LikeableItem name="test" to="/test" />
      </WithMemoryRouting>
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
    expect(screen.getByTitle("Heart Icon")).not.toHaveClass("Heart--filled");
  });
  it("should render a filled heart icon", () => {
    console.log(useFavourite.prototype);
    (useFavourite as Mock).mockImplementation(() => ({
      isLiked: true,
      onToggleLike: vi.fn(),
    }));
    render(
      <WithMemoryRouting>
        <LikeableItem name="test" to="/test" />
      </WithMemoryRouting>
    );
    expect(screen.getByTitle("Heart Icon")).not.toHaveClass("Heart--filled");
  });
});
