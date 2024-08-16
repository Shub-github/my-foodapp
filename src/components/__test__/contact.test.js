// Unit testing
import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import { act } from "react";

// test("should component load", () => {
//   act(() => {
//     render(<Contact />);
//   });

//   const heading = screen.getByRole("heading");
//   // Assertion
//   expect(heading).toBeInTheDocument();
// });

// test("Should load placeholder in the component", () => {
//   act(() => {
//     render(<Contact />);
//   });

//   const textarea = screen.getByPlaceholderText("Leave a comment...");
//   expect(textarea).toBeInTheDocument();
// });

// "describe" is same is just groping the test cases
// "it" is just a allias of test and all are same.

describe("Contact Us test cases", () => {
  it("Should load placeHolder in the component.", () => {
    act(() => {
      render(<Contact />);
    });
    const textarea = screen.getAllByRole("textbox");
    // console.log(textarea);
    expect(textarea.length).toBe(3);
  });
  it("Should load placeholder in the component", () => {
    act(() => {
      render(<Contact />);
    });

    const textarea = screen.getByPlaceholderText("Leave a comment...");
    expect(textarea).toBeInTheDocument();
  });
});
