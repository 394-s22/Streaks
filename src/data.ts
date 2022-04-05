import { Group, User } from "./lib/types";

const groups: Group = {
  "0": {
    description: "A group to get better at running.",
    duration: 30,
    groupId: "0",
    groupName: "Cool Runners",
    groupPassword: "password_secret",
    habit: "Running everyday",
    memberIds: ["2", "3", "4"],
    payInAmt: 30.0,
    progress: {
      "2022-03-30": { userIdsWhoCheckedIn: [] },
      "2022-03-31": { userIdsWhoCheckedIn: ["3"] },
      "2022-04-01": { userIdsWhoCheckedIn: ["3", "4"] },
      "2022-04-02": { userIdsWhoCheckedIn: ["2", "3", "4"] },
    },
    streaks: {
      "2": 1,
      "3": 3,
      "4": 2,
      "5": 0,
    },
    publicPot: 0,
    startDate: "2022-03-30",
  },
};

const users: User = {
  "2": {
    cellphoneNumber: "462-618-8939",
    email: "john@gmail.com",
    groupInfo: {
      "0": {
        deposit: 27.5,
        groupId: "0",
        payout: 2.5,
      },
    },
    name: "John Doe",
    id: "2",
  },
  "3": {
    cellphoneNumber: "472-968-0939",
    email: "jane@gmail.com",
    groupInfo: {
      "0": {
        deposit: 27.5,
        groupId: "0",
        payout: 2.5,
      },
    },
    name: "Jane Doe",
    id: "3",
  },
  "4": {
    cellphoneNumber: "423-634-5683",
    email: "test@gmail.com",
    groupInfo: {
      "0": {
        deposit: 27.5,
        groupId: "0",
        payout: 2.5,
      },
    },
    name: "Test Person",
    id: "4",
  },
  "5": {
    cellphoneNumber: "423-634-5683",
    email: "hello@gmail.com",
    groupInfo: {
      "0": {
        deposit: 27.5,
        groupId: "0",
        payout: 2.5,
      },
    },
    name: "Hello world",
    id: "5",
  },
};

export { groups, users };
