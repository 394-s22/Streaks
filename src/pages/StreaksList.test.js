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
    currentUser: {
      cellphoneNumber: "111-111-1111",
      email: "test@gmail.com",
      groupInfo: null,
      name: "John Doe",
      id: "2",
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
  render(
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
            userIdsWhoCheckedIn: ["2"],
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
    />,
    { wrapper: MemoryRouter }
  );
  const infoButton = screen.getByText("Info");
  fireEvent.click(infoButton);
  expect(screen.getByText("Info")).toBeInTheDocument();
  expect(screen.getByText("Description")).toBeInTheDocument();
});

// Ben Miller (hard)

test("check in button shows leaderboard", async () => {
  useCurrentUser.mockReturnValue({
    currentUser: {
      cellphoneNumber: "111-111-1111",
      email: "test@gmail.com",
      groupInfo: null,
      name: "John Doe",
      id: "2",
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
  render(
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
            userIdsWhoCheckedIn: ["2"],
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
    />,
    { wrapper: MemoryRouter }
  );
  //screen.debug();
  //debug();
  const checkInButton = await screen.findByText("Check In");
  fireEvent.click(checkInButton);
  expect(screen.getByText("You have checked in today 🙌")).toBeInTheDocument();
  expect(screen.getByText("Streak:")).toBeInTheDocument();
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
