import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MockRestro from "../mocks/MockRestro.json";
import { BrowserRouter } from "react-router-dom";

// creating a dummy fetch function because in Body component we are fetching the data, that is coming from another server and fetch() method is provided by the browser, here browser is not in use, and this fetch() function return the promise,we can't make a network call here because test cases not run on browser.

// when every we use updateState or async function just wrap the render() under act.

// +++++++++++++++++not work++++++++++++++

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockRestro);
    },
  });
});

// describe("Body component test cases", () => {
//   it("Should render the Body component with search button", async () => {
//     await act(async () => {
//       render(<Body />);
//     });

//     const searchBtn = screen.getByRole("button", { name: "Search" });
//     expect(searchBtn).toBeInTheDocument();
//   });
// });

// +++++++++++++++++++++++++++++++++++++++++++++++++

it("Should Search Res List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  console.log("====>", cardsBeforeSearch.length);
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(13);
});
