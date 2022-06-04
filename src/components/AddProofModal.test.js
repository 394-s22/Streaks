import { render, screen, debug } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddProofModal from "./AddProofModal";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("user cant submit until there is an image", async () => {
  // returning for groups
  const blankFn = jest.fn();
  render(
    <AddProofModal
      handleClose={blankFn}
      isOpen={true}
      currentDate={""}
      handleCheckIn={blankFn}
      currentGroup={2}
    />,
    { wrapper: MemoryRouter }
  );
  // screen.debug();
  const button = await screen.findByText(/Submit/i, {
    timeout: 3000,
  });
  expect(button).toBeDisabled();
  // userEvent.click(button);
});
