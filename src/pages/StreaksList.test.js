import { render, screen, debug, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import StreaksList from "./StreaksList.tsx";
import { setData, useData } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";
import { useState } from "react";

// Hello, I still cannot get my tests to work but I have already spent 7 hours on this
// assignment over 3 days and it is due tonight. I tried my hardest but got stuck on
//mocking the useData function and have not found a solution.

jest.mock("../utilities/useCurrentUser");
jest.mock("../utilities/firebase.ts");

// Ben Miller (easy)
test("group info button opens Group Info modal", () => {
  useCurrentUser.mockReturnValue({
    currentUser: { name: "John"},
    loading: false,
  });
  useData.mockReturnValue([{
    "John": {name: "John"}, "Jane": {name: "Jane"} 
}]);
render(
  <StreaksList
  groupInfo={{
    description: "A group to get better at running.",
    duration: 30,
    groupId: "0",
    groupName: "Cool Runners",
    groupPassword: "password_secret",
    habit: "Run everyday",
    progress: {
      "2022-06-07": {
          "userIdsWhoCheckedIn": [
              "3"
          ]
      }}, 
   streaks: {
      "John": 10,
      "Jane": 4
      
  }
  }}
date={"2022-06-07"}
  />,
  { wrapper: MemoryRouter }
);
  const infoButton = screen.getByText("Info");
  fireEvent.click(infoButton);
  //expect(screen.getByText("Info")).toBeInTheDocument();
  expect(screen.getByText("Description")).toBeInTheDocument();
});

test("checking in updates the leaderboard", async () => {
  useCurrentUser.mockReturnValue({
    currentUser: {
      cellphoneNumber: "111-111-1111",
      email: "test@gmail.com",
      groupInfo: null,
      name: "John Doe",
      id: "3",
    },
    loading: false,
  });
  useData.mockReturnValue({
    2: {
      cellphoneNumber: "111-111-1111",
      email: "test@gmail.com",
      groupInfo: null,
      name: "John Doe",
      id: "2",
    },
  });

  function TestComponent() {
    const [hasCheckedIn, setHasCheckedIn] = useState(false);

    return (
      <div>
        <button
          onClick={() => {
            setHasCheckedIn(true);
          }}
        >
          Fake Check in
        </button>

        <StreaksList
          groupInfo={{
            description: "test description",
            duration: 5,
            groupId: "0",
            groupName: "test group",
            groupPassword: "test_password",
            habit: "test habit",
            memberIds: ["2"],
            payInAmt: 5,
            progress: {
              "2022-06-01": {
                userIdsWhoCheckedIn: hasCheckedIn ? ["2"] : [],
                userReactions: {},
              },
            },
            publicPot: 10,
            startDate: "2022-06-01",
            streaks: {
              2: 3,
            },
          }}
          date={""}
        />
      </div>
    );
  }

  render(<TestComponent />, { wrapper: MemoryRouter });
  // screen.debug();
  //debug();
  const checkInButton = await screen.findByText("Fake Check in");
  fireEvent.click(checkInButton);
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});
