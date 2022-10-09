import { render, screen } from "@testing-library/react";
import { WithMemoryRouting } from "@test/utils";
import { Header } from "./Header";

describe("Header", () => {
  it("should render 5 nav links", () => {
    render(
      <WithMemoryRouting>
        <Header />
      </WithMemoryRouting>
    );
    expect(screen.getAllByRole("link")).toHaveLength(5);
  });
});
