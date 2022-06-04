import { render, screen, debug } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReactionButton from "./ReactionButton";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("clicking a reaction that you've liked before ", async () => {
  const blankFn = jest.fn();
  render(
    <ReactionButton
      userInfo={{
        cellphoneNumber: "111-111-1111",
        email: "test@gmail.com",
        groupInfo: null,
        name: "John Doe",
        id: "10",
      }}
      currentDate="2022-06-04"
      groupId="0"
      progress={{ userIdsWhoCheckedIn: ["10"], userReactions: null }}
      currentUser="10"
      iconType="Like"
    />,
    { wrapper: MemoryRouter }
  );
});
