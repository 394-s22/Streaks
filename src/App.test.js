import {
  render,
  screen,
  debug,
  fireEvent,
  getByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { useCurrentUser } from "./utilities/useCurrentUser";
import { setData, useData } from "./utilities/firebase";
import userEvent from "@testing-library/user-event";

jest.mock("./utilities/useCurrentUser");
jest.mock("./utilities/firebase");

test("renders learn react link", () => {
  useCurrentUser.mockReturnValue({
    currentUser: null,
    loading: true,
  });
  render(<App />, { wrapper: MemoryRouter });
  const linkElement = screen.queryByText(/Loading/);
  expect(linkElement).toBeInTheDocument();
});

//Joshua Lee
test("user is logged in", () => {
  useCurrentUser.mockReturnValue({
    currentUser: { name: "John" },
    loading: false,
  });

  useData.mockReturnValue([
    {
      0: {
        description: "A group to get better at running.",
        duration: 30,
        groupId: "0",
        groupName: "Cool Runners",
        groupPassword: "password_secret",
        habit: "Run everyday",
        memberIds: [" ", " ", " ", " "],
        payInAmt: 30,
        progress: {
          "2022-03-31": {
            userIdsWhoCheckedIn: ["3"],
          },
          "2022-04-01": {
            userIdsWhoCheckedIn: ["3", "4", "2"],
          },
          "2022-04-02": {
            userIdsWhoCheckedIn: ["2", "3", "4"],
          },
          "2022-04-07": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-08": {
            userIdsWhoCheckedIn: ["", "2"],
          },
          "2022-04-09": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-11": {
            userIdsWhoCheckedIn: ["", "3"],
          },
          "2022-04-12": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-13": {
            userIdsWhoCheckedIn: ["", "2", "3", "4"],
          },
          "2022-04-14": {
            userIdsWhoCheckedIn: ["", "4", "3", "2"],
          },
          "2022-04-15": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-17": {
            userIdsWhoCheckedIn: ["", "2"],
          },
          "2022-04-18": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                likes: 0,
              },
            },
          },
          "2022-04-19": {
            userIdsWhoCheckedIn: ["", "3", "4", "2"],
            userReactions: [
              null,
              null,
              {
                likes: ["2"],
              },
              {
                likes: ["", "2"],
              },
              {
                likes: ["", "2"],
              },
            ],
          },
          "2022-04-20": {
            userIdsWhoCheckedIn: ["", "3", "4", "2"],
            userReactions: [
              null,
              null,
              {
                likes: ["", "2"],
              },
              {
                likes: ["", "2"],
              },
              {
                likes: [""],
              },
            ],
          },
          "2022-04-21": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                likes: ["", "2"],
              },
            },
          },
          "2022-04-22": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                Fire: ["", "2"],
                Like: ["", "2"],
                Wow: ["", "2"],
                likes: [""],
              },
            },
          },
          "2022-04-23": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
            },
          },
          "2022-04-25": {
            userIdsWhoCheckedIn: [
              "",
              "lIOWRas13xcxr43HFYsEJiTXHHM2",
              "OQaXbpGNUYdx1muFNw6mjiTJoay2",
              "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
              "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
              "p99d8nwkmjVc8IdfWZby7JxXOb62",
              "W9678ysLxcdiF1CWlpd77cC7rdp1",
              "0LboxYZvUdhejByjb6mi8A0x8Wm1",
            ],
            userReactions: {
              2: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              "0LboxYZvUdhejByjb6mi8A0x8Wm1": {
                Fire: [""],
                Like: [""],
                Wow: [
                  "",
                  "0LboxYZvUdhejByjb6mi8A0x8Wm1",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
              },
              OQaXbpGNUYdx1muFNw6mjiTJoay2: {
                Fire: [
                  "",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
                Like: [
                  "",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                  "p99d8nwkmjVc8IdfWZby7JxXOb62",
                  "W9678ysLxcdiF1CWlpd77cC7rdp1",
                ],
                Wow: ["", "ppFNELg8P9PMhASR4Q0m2Pc3EOG2"],
              },
              W9678ysLxcdiF1CWlpd77cC7rdp1: {
                Fire: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
                Like: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
                Wow: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
              },
              YWmoOUwqmUX5yqzJfU8KtX4pZ3D3: {
                Fire: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
                Like: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                ],
                Wow: ["", "bs9wTwp9lcNOYCWKDn5C2EvzXy62"],
              },
              lIOWRas13xcxr43HFYsEJiTXHHM2: {
                Fire: [""],
                Like: [
                  "",
                  "OQaXbpGNUYdx1muFNw6mjiTJoay2",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
                Wow: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
              },
              p99d8nwkmjVc8IdfWZby7JxXOb62: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              ppFNELg8P9PMhASR4Q0m2Pc3EOG2: {
                Fire: [""],
                Like: [""],
                Wow: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
              },
            },
          },
          "2022-04-26": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-27": {
            userIdsWhoCheckedIn: [
              "",
              "C6EwFYth2be8KopXsds1GyVMYke2",
              "ER12QFjvIROl52Ev0AmQA24d5O42",
              "n1qRf10BDbSH2k2jg9qlH8Cf8gE2",
            ],
            userReactions: {
              "9axsq4ZnmmVwiOFQ6Zd4HjjB6Nk2": {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              C6EwFYth2be8KopXsds1GyVMYke2: {
                Fire: [""],
                Like: ["", "n1qRf10BDbSH2k2jg9qlH8Cf8gE2"],
                Wow: [""],
              },
              ER12QFjvIROl52Ev0AmQA24d5O42: {
                Fire: [""],
                Like: ["", "n1qRf10BDbSH2k2jg9qlH8Cf8gE2"],
                Wow: [""],
              },
              n1qRf10BDbSH2k2jg9qlH8Cf8gE2: {
                Fire: [""],
                Like: [
                  "",
                  "ER12QFjvIROl52Ev0AmQA24d5O42",
                  "C6EwFYth2be8KopXsds1GyVMYke2",
                ],
                Wow: [""],
              },
            },
          },
          "2022-05-20": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-05-25": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-06-02": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-06-05": {
            userIdsWhoCheckedIn: [""],
          },
        },
        publicPot: 0,
        startDate: "2022-03-30",
        streaks: {
          "9DQYPt3qIsdwShbJeDFWYEMbdek1": 0,
          C6EwFYth2be8KopXsds1GyVMYke2: 10,
          EKMR1r6K7QUIJuw4hPLTjtAcjXK2: 0,
          ER12QFjvIROl52Ev0AmQA24d5O42: 4,
          U8alBnF2YOY4hUnRFzhs9yv17AV2: 0,
          n1qRf10BDbSH2k2jg9qlH8Cf8gE2: 6,
          pQPWYR7B8BMGiFGZCObrReOJlr62: 0,
        },
      },
      20: {
        description: "We want to read books everyday.",
        groupName: "Book Worms",
      },
    },
    false,
    "",
  ]);
  render(<App />, { wrapper: MemoryRouter });
  const groupElement = screen.queryByText(/Streaks/);
  expect(groupElement).toBeInTheDocument();
});

//Joshua Lee
test("user can click on a group", () => {
  useCurrentUser.mockReturnValue({
    currentUser: { name: "Josh" },
    loading: false,
  });
  useData.mockReturnValue([
    {
      0: {
        description: "A group to get better at running.",
        duration: 30,
        groupId: "0",
        groupName: "Cool Runners",
        groupPassword: "password_secret",
        habit: "Run everyday",
        memberIds: [" ", " ", " ", " "],
        payInAmt: 30,
        progress: {
          "2022-03-31": {
            userIdsWhoCheckedIn: ["3"],
          },
          "2022-04-01": {
            userIdsWhoCheckedIn: ["3", "4", "2"],
          },
          "2022-04-02": {
            userIdsWhoCheckedIn: ["2", "3", "4"],
          },
          "2022-04-07": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-08": {
            userIdsWhoCheckedIn: ["", "2"],
          },
          "2022-04-09": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-11": {
            userIdsWhoCheckedIn: ["", "3"],
          },
          "2022-04-12": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-13": {
            userIdsWhoCheckedIn: ["", "2", "3", "4"],
          },
          "2022-04-14": {
            userIdsWhoCheckedIn: ["", "4", "3", "2"],
          },
          "2022-04-15": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-17": {
            userIdsWhoCheckedIn: ["", "2"],
          },
          "2022-04-18": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                likes: 0,
              },
            },
          },
          "2022-04-19": {
            userIdsWhoCheckedIn: ["", "3", "4", "2"],
            userReactions: [
              null,
              null,
              {
                likes: ["2"],
              },
              {
                likes: ["", "2"],
              },
              {
                likes: ["", "2"],
              },
            ],
          },
          "2022-04-20": {
            userIdsWhoCheckedIn: ["", "3", "4", "2"],
            userReactions: [
              null,
              null,
              {
                likes: ["", "2"],
              },
              {
                likes: ["", "2"],
              },
              {
                likes: [""],
              },
            ],
          },
          "2022-04-21": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                likes: ["", "2"],
              },
            },
          },
          "2022-04-22": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                Fire: ["", "2"],
                Like: ["", "2"],
                Wow: ["", "2"],
                likes: [""],
              },
            },
          },
          "2022-04-23": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
            },
          },
          "2022-04-25": {
            userIdsWhoCheckedIn: [
              "",
              "lIOWRas13xcxr43HFYsEJiTXHHM2",
              "OQaXbpGNUYdx1muFNw6mjiTJoay2",
              "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
              "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
              "p99d8nwkmjVc8IdfWZby7JxXOb62",
              "W9678ysLxcdiF1CWlpd77cC7rdp1",
              "0LboxYZvUdhejByjb6mi8A0x8Wm1",
            ],
            userReactions: {
              2: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              "0LboxYZvUdhejByjb6mi8A0x8Wm1": {
                Fire: [""],
                Like: [""],
                Wow: [
                  "",
                  "0LboxYZvUdhejByjb6mi8A0x8Wm1",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
              },
              OQaXbpGNUYdx1muFNw6mjiTJoay2: {
                Fire: [
                  "",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
                Like: [
                  "",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                  "p99d8nwkmjVc8IdfWZby7JxXOb62",
                  "W9678ysLxcdiF1CWlpd77cC7rdp1",
                ],
                Wow: ["", "ppFNELg8P9PMhASR4Q0m2Pc3EOG2"],
              },
              W9678ysLxcdiF1CWlpd77cC7rdp1: {
                Fire: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
                Like: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
                Wow: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
              },
              YWmoOUwqmUX5yqzJfU8KtX4pZ3D3: {
                Fire: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
                Like: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                ],
                Wow: ["", "bs9wTwp9lcNOYCWKDn5C2EvzXy62"],
              },
              lIOWRas13xcxr43HFYsEJiTXHHM2: {
                Fire: [""],
                Like: [
                  "",
                  "OQaXbpGNUYdx1muFNw6mjiTJoay2",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
                Wow: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
              },
              p99d8nwkmjVc8IdfWZby7JxXOb62: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              ppFNELg8P9PMhASR4Q0m2Pc3EOG2: {
                Fire: [""],
                Like: [""],
                Wow: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
              },
            },
          },
          "2022-04-26": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-27": {
            userIdsWhoCheckedIn: [
              "",
              "C6EwFYth2be8KopXsds1GyVMYke2",
              "ER12QFjvIROl52Ev0AmQA24d5O42",
              "n1qRf10BDbSH2k2jg9qlH8Cf8gE2",
            ],
            userReactions: {
              "9axsq4ZnmmVwiOFQ6Zd4HjjB6Nk2": {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              C6EwFYth2be8KopXsds1GyVMYke2: {
                Fire: [""],
                Like: ["", "n1qRf10BDbSH2k2jg9qlH8Cf8gE2"],
                Wow: [""],
              },
              ER12QFjvIROl52Ev0AmQA24d5O42: {
                Fire: [""],
                Like: ["", "n1qRf10BDbSH2k2jg9qlH8Cf8gE2"],
                Wow: [""],
              },
              n1qRf10BDbSH2k2jg9qlH8Cf8gE2: {
                Fire: [""],
                Like: [
                  "",
                  "ER12QFjvIROl52Ev0AmQA24d5O42",
                  "C6EwFYth2be8KopXsds1GyVMYke2",
                ],
                Wow: [""],
              },
            },
          },
          "2022-05-20": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-05-25": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-06-02": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-06-05": {
            userIdsWhoCheckedIn: [""],
          },
        },
        publicPot: 0,
        startDate: "2022-03-30",
        streaks: {
          "9DQYPt3qIsdwShbJeDFWYEMbdek1": 0,
          C6EwFYth2be8KopXsds1GyVMYke2: 10,
          EKMR1r6K7QUIJuw4hPLTjtAcjXK2: 0,
          ER12QFjvIROl52Ev0AmQA24d5O42: 4,
          U8alBnF2YOY4hUnRFzhs9yv17AV2: 0,
          n1qRf10BDbSH2k2jg9qlH8Cf8gE2: 6,
          pQPWYR7B8BMGiFGZCObrReOJlr62: 0,
        },
      },
      20: {
        description: "We want to read books everyday.",
        groupName: "Book Worms",
      },
    },
    false,
    "",
  ]);

  render(<App />, { wrapper: MemoryRouter });
  const button = screen.getByText("Visit Cool Runners");
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  test = screen.getByText("A group to get better at running.");
  expect(test).toBeInTheDocument();
});

// Fardeem
test("Page navigation works", async () => {
  useCurrentUser.mockReturnValue({
    currentUser: { name: "John" },
    loading: false,
  });

  useData.mockReturnValue([
    {
      0: {
        description: "A group to get better at running.",
        duration: 30,
        groupId: "0",
        groupName: "Cool Runners",
        groupPassword: "password_secret",
        habit: "Run everyday",
        memberIds: [" ", " ", " ", " "],
        payInAmt: 30,
        progress: {
          "2022-03-31": {
            userIdsWhoCheckedIn: ["3"],
          },
          "2022-04-01": {
            userIdsWhoCheckedIn: ["3", "4", "2"],
          },
          "2022-04-02": {
            userIdsWhoCheckedIn: ["2", "3", "4"],
          },
          "2022-04-07": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-08": {
            userIdsWhoCheckedIn: ["", "2"],
          },
          "2022-04-09": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-11": {
            userIdsWhoCheckedIn: ["", "3"],
          },
          "2022-04-12": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-13": {
            userIdsWhoCheckedIn: ["", "2", "3", "4"],
          },
          "2022-04-14": {
            userIdsWhoCheckedIn: ["", "4", "3", "2"],
          },
          "2022-04-15": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-17": {
            userIdsWhoCheckedIn: ["", "2"],
          },
          "2022-04-18": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                likes: 0,
              },
            },
          },
          "2022-04-19": {
            userIdsWhoCheckedIn: ["", "3", "4", "2"],
            userReactions: [
              null,
              null,
              {
                likes: ["2"],
              },
              {
                likes: ["", "2"],
              },
              {
                likes: ["", "2"],
              },
            ],
          },
          "2022-04-20": {
            userIdsWhoCheckedIn: ["", "3", "4", "2"],
            userReactions: [
              null,
              null,
              {
                likes: ["", "2"],
              },
              {
                likes: ["", "2"],
              },
              {
                likes: [""],
              },
            ],
          },
          "2022-04-21": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                likes: ["", "2"],
              },
            },
          },
          "2022-04-22": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                Fire: ["", "2"],
                Like: ["", "2"],
                Wow: ["", "2"],
                likes: [""],
              },
            },
          },
          "2022-04-23": {
            userIdsWhoCheckedIn: ["", "2"],
            userReactions: {
              2: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
            },
          },
          "2022-04-25": {
            userIdsWhoCheckedIn: [
              "",
              "lIOWRas13xcxr43HFYsEJiTXHHM2",
              "OQaXbpGNUYdx1muFNw6mjiTJoay2",
              "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
              "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
              "p99d8nwkmjVc8IdfWZby7JxXOb62",
              "W9678ysLxcdiF1CWlpd77cC7rdp1",
              "0LboxYZvUdhejByjb6mi8A0x8Wm1",
            ],
            userReactions: {
              2: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              "0LboxYZvUdhejByjb6mi8A0x8Wm1": {
                Fire: [""],
                Like: [""],
                Wow: [
                  "",
                  "0LboxYZvUdhejByjb6mi8A0x8Wm1",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
              },
              OQaXbpGNUYdx1muFNw6mjiTJoay2: {
                Fire: [
                  "",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
                Like: [
                  "",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                  "p99d8nwkmjVc8IdfWZby7JxXOb62",
                  "W9678ysLxcdiF1CWlpd77cC7rdp1",
                ],
                Wow: ["", "ppFNELg8P9PMhASR4Q0m2Pc3EOG2"],
              },
              W9678ysLxcdiF1CWlpd77cC7rdp1: {
                Fire: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
                Like: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
                Wow: ["", "W9678ysLxcdiF1CWlpd77cC7rdp1"],
              },
              YWmoOUwqmUX5yqzJfU8KtX4pZ3D3: {
                Fire: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
                Like: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                ],
                Wow: ["", "bs9wTwp9lcNOYCWKDn5C2EvzXy62"],
              },
              lIOWRas13xcxr43HFYsEJiTXHHM2: {
                Fire: [""],
                Like: [
                  "",
                  "OQaXbpGNUYdx1muFNw6mjiTJoay2",
                  "YWmoOUwqmUX5yqzJfU8KtX4pZ3D3",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
                Wow: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "bs9wTwp9lcNOYCWKDn5C2EvzXy62",
                ],
              },
              p99d8nwkmjVc8IdfWZby7JxXOb62: {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              ppFNELg8P9PMhASR4Q0m2Pc3EOG2: {
                Fire: [""],
                Like: [""],
                Wow: [
                  "",
                  "lIOWRas13xcxr43HFYsEJiTXHHM2",
                  "ppFNELg8P9PMhASR4Q0m2Pc3EOG2",
                ],
              },
            },
          },
          "2022-04-26": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-04-27": {
            userIdsWhoCheckedIn: [
              "",
              "C6EwFYth2be8KopXsds1GyVMYke2",
              "ER12QFjvIROl52Ev0AmQA24d5O42",
              "n1qRf10BDbSH2k2jg9qlH8Cf8gE2",
            ],
            userReactions: {
              "9axsq4ZnmmVwiOFQ6Zd4HjjB6Nk2": {
                Fire: [""],
                Like: [""],
                Wow: [""],
              },
              C6EwFYth2be8KopXsds1GyVMYke2: {
                Fire: [""],
                Like: ["", "n1qRf10BDbSH2k2jg9qlH8Cf8gE2"],
                Wow: [""],
              },
              ER12QFjvIROl52Ev0AmQA24d5O42: {
                Fire: [""],
                Like: ["", "n1qRf10BDbSH2k2jg9qlH8Cf8gE2"],
                Wow: [""],
              },
              n1qRf10BDbSH2k2jg9qlH8Cf8gE2: {
                Fire: [""],
                Like: [
                  "",
                  "ER12QFjvIROl52Ev0AmQA24d5O42",
                  "C6EwFYth2be8KopXsds1GyVMYke2",
                ],
                Wow: [""],
              },
            },
          },
          "2022-05-20": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-05-25": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-06-02": {
            userIdsWhoCheckedIn: [""],
          },
          "2022-06-05": {
            userIdsWhoCheckedIn: [""],
          },
        },
        publicPot: 0,
        startDate: "2022-03-30",
        streaks: {
          "9DQYPt3qIsdwShbJeDFWYEMbdek1": 0,
          C6EwFYth2be8KopXsds1GyVMYke2: 10,
          EKMR1r6K7QUIJuw4hPLTjtAcjXK2: 0,
          ER12QFjvIROl52Ev0AmQA24d5O42: 4,
          U8alBnF2YOY4hUnRFzhs9yv17AV2: 0,
          n1qRf10BDbSH2k2jg9qlH8Cf8gE2: 6,
          pQPWYR7B8BMGiFGZCObrReOJlr62: 0,
        },
      },
      20: {
        description: "We want to read books everyday.",
        groupName: "Book Worms",
      },
    },
    false,
    "",
  ]);

  render(<App />, { wrapper: MemoryRouter });
  const btn = screen.getByRole("button", {
    name: "Visit Cool Runners",
  });

  fireEvent.click(btn);

  const page = await screen.findByText("Cool Runners");

  expect(page).toBeInTheDocument();
});
