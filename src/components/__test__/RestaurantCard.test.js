// Unit testing of component with props

import { render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantCard from "../RestaurantCard";
import RestaurantCardMockData from "../mocks/RestaurantCardMockData.json";

it("Should render Restaurant Card component with prop", () => {
  act(() => {
    render(<RestaurantCard resData={RestaurantCardMockData} />);
  });

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
