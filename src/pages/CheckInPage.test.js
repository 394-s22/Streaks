import { render, screen, debug, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckinPage from "./StreaksList";
import { MemoryRouter } from "react-router-dom";
import { useCurrentUser } from "../utilities/useCurrentUser";
import { setData, useData } from "../utilities/firebase";
import userEvent from "@testing-library/user-event";
import { AllUsers, GroupMetaData } from "../lib/types";
jest.mock("../utilities/useCurrentUser");
jest.mock("../utilities/firebase");
const date = new Date().toISOString().substring(0, 10);

test("user can click on a group", () => {
    useCurrentUser.mockReturnValue({
      currentUser: { name: "Josh"},
      loading: false,
    });
    useData.mockReturnValue([{
        "mieraf": {name: "mieraf"}, "john": {name: "john"} 
    }]);

  
    render(
    <CheckinPage 
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
            "mieraf": 10,
            "john": 4
            
        }
        }}
     date={"2022-06-07"} 
     
     />,
     { wrapper: MemoryRouter });
    
    const checkInBtn = screen.getByTestId("ckInBtn");
    fireEvent.click(checkInBtn);
    // screen.debug()
    const form = screen.getByText("Upload Your Proof");
    expect(form).toBeInTheDocument();

  })