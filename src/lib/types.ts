export type Group = {
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
};

type GroupProgress = {
  userIdsWhoCheckedIn: string[];
};

export type User = {
  cellphoneNumber: string;
  email: string;
  groupInfo: GroupInfo[];
  name: string;
  id: string;
};

type GroupInfo = {
  deposit: number;
  groupId: string;
  payout: number;
};
