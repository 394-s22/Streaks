export type Group =  Record<string, GroupMetaData>;

export type GroupMetaData = {
  description: string;
  duration: number;
  groupId: string;
  groupName: string;
  groupPassword: string;
  habit: string;
  memberIds: string[];
  payInAmt: number;
  progress: Record<string, GroupProgress>;
  publicPot: number;
  startDate: string;
  streaks: Record<string, number>;
};

type GroupProgress = {
  userIdsWhoCheckedIn: string[];
};

export type User = Record<string, UserInfo>;

export type UserInfo = {
  cellphoneNumber: string;
  email: string;
  groupInfo: Record<string, GroupInfo>;
  name: string;
  id: string;
};

type GroupInfo = {
  deposit: number;
  groupId: string;
  payout: number;
};
