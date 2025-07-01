import { render, screen } from "@testing-library/react";
import Navigation from ".";

// Mock useRouter so pathname is a string, e.g. "/" or "/history"
jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: "/" };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation players={[]} />); // no players passed, plays on "/"

  //screen.getAllByRole("link") gets both <a> links
  //it returns an array of the two links
  const links = screen.getAllByRole("link");

  expect(links).toHaveLength(2);

  expect(links[0]).toHaveTextContent("Play");
  expect(links[1]).toHaveTextContent("History");
});
