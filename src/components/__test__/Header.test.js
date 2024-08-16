// Unit testing
// Here in Header component we have redux hook i.e.useSelector so we use Provider to wrap the render component
// We are Link i.e. is a coming from Router-dom, so we will wrap it by browserRouter.
// these all we have to provide under render();
// using rejex as text i.e. /cart/ we can find no need to write other thing
// fireEvent help to fire a event like click.
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";

describe("Header Component test cases", () => {
  it("Should load Header component with login button", () => {
    act(() => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );
    });
    const button = screen.getByRole("button", { name: "Login" });
    // assertion
    expect(button).toBeInTheDocument();
  });

  it("Should render the Header component with Cart item 0", () => {
    act(() => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );
    });

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
  });

  it("Should change login button to logout button on click", () => {
    act(() => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );
    });

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
