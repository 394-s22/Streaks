import { render, screen, debug } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { useCurrentUser } from "./utilities/useCurrentUser";
import userEvent from "@testing-library/user-event";

jest.mock("./utilities/useCurrentUser");
test("user cant submit until there is an image", async () => {
  useCurrentUser.mockReturnValue({
    currentUser: { name: "John", id: 2 },
    loading: false,
  });
  // returning for groups
  render(<App />, { wrapper: MemoryRouter });
  // screen.debug();
  const button = await screen.findByText(/Visit Cool Runners/, {
    timeout: 3000,
  });
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  const habitText = await screen.findByText(/Run everyday/);
  expect(habitText).toBeInTheDocument();
});
