import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { useCurrentUser } from "./utilities/useCurrentUser";

jest.mock("./utilities/useCurrentUser");
test("renders learn react link", () => {
  useCurrentUser.mockReturnValue({
    currentUser: null,
    loading: true,
  });
  render(<App />, { wrapper: MemoryRouter });
  const linkElement = screen.queryByText(/Loading/);
  expect(linkElement).toBeInTheDocument();
});

test("user is logged in", () => {
  useCurrentUser.mockReturnValue({
    currentUser: { name: "John" },
    loading: false,
  });
  render(<App />, { wrapper: MemoryRouter });
  const groupElement = screen.queryByText(/Streaks/);
  expect(groupElement).toBeInTheDocument();
});
