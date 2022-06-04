import { render, screen, debug, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReactionButton from "./ReactionButton";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { setData, useData } from "../utilities/firebase";

jest.mock("../utilities/firebase");
test("clicking a reaction that you've liked before ", async () => {
  const blankFn = jest.fn();
  setData.mockReturnValue(Promise.resolve({ data: {} }));
  render(
    <ReactionButton
      userInfo={{
        cellphoneNumber: "111-111-1111",
        email: "test@gmail.com",
        groupInfo: null,
        name: "John Doe",
        id: "abc",
      }}
      currentDate="2022-06-04"
      groupId="0"
      progress={{
        userIdsWhoCheckedIn: ["11"],
        userReactions: { abc: { Like: ["abc", "efg"] } },
      }}
      currentUser="efg"
      iconType="Like"
    />,
    { wrapper: MemoryRouter }
  );
  const button = screen.getByText("x1");
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  await waitFor(() => expect(setData).toHaveBeenCalledTimes(1));
  expect(setData).toHaveBeenCalledWith(
    "/groups/0/progress/2022-06-04/userReactions/abc/Like",
    ["abc"]
  );
});
