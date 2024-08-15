import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import { act } from "react";

test("should component load", () => {
  act(() => {
    render(<Contact />);
  });

  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Check the load component by placeholder", () => {
  act(() => {
    render(<Contact />);
  });

  const textarea = screen.getByPlaceholderText("Leave a comment...");
  expect(textarea).toBeInTheDocument();
});
