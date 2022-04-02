import { Group, User } from "./lib/types";

const groups: Group[] = [
  {
    description: "This is the description where you run everyday",
    duration: 30,
    groupId: "0",
    groupName: "Cool Runners",
    groupPassword: "password_secret",
    habit: "Running everyday",
    memberIds: ["2", "3"],
    payInAmt: 30.0,
    progress: {
      "2022-03-31": { userIdsWhoCheckedIn: ["2", "3"] },
      "2022-04-01": { userIdsWhoCheckedIn: ["3"] },
      "2022-04-02": { userIdsWhoCheckedIn: [] },
    },
    publicPot: 0,
    startDate: "2022-04-30",
  },
];

const users: User[] = [
  {
    cellphoneNumber: "462-618-8939",
    email: "john@gmail.com",
    groupInfo: [
      {
        deposit: 27.5,
        groupId: "0",
        payout: 2.5,
      },
    ],
    name: "John Doe",
    id: "2",
  },
  {
    cellphoneNumber: "472-968-0939",
    email: "jane@gmail.com",
    groupInfo: [
      {
        deposit: 27.5,
        groupId: "0",
        payout: 2.5,
      },
    ],
    name: "Jane Doe",
    id: "3",
  },
  {
    cellphoneNumber: "423-634-5683",
    email: "test@gmail.com",
    groupInfo: [
      {
        deposit: 27.5,
        groupId: "0",
        payout: 2.5,
      },
    ],
    name: "Test Person",
    id: "4",
  },
];

export { groups, users };
