
export interface Budget {
  value: number
  currency: string
}
export enum EnumPlatforms {
  INSTAGRAM= 'INSTAGRAM',
  YOUTUBE= 'YOUTUBE',
  TWITCH= 'TWITCH',
  OTHER= 'OTHER'
}
export const EnumPlatformsToArray =  Object.values(EnumPlatforms)
export type TaskModel = {
  title: string
  description: string
  budget: Budget
  platforms: EnumPlatforms[]
  filesIds: string[]
}

export interface File {
  id: string;
  filename: string;
  size: number;
  signedUrl: string;
}

export interface AvatarSimpleAccessFile {
  id: string;
  filename: string;
  size: number;
  signedUrl: string;
}

export interface MarketerInfo {
  firstName: string;
  lastName: string;
  description: string;
  avatarSimpleAccessFile: AvatarSimpleAccessFile;
  rating: number;
  moneyTransferred: number;
  location: string;
  registerDate: Date;
}

export interface TaskResponseModel {
  id: string;
  addedTime: Date;
  title: string;
  description: string;
  budget: Budget;
  proposalCount: number;
  platforms: string[];
  proposalAlreadySent: boolean;
  addedByMe: boolean;
  hasContractCreated: boolean;
  hasContractAccepted: boolean;
  files: File[];
  marketerInfo: MarketerInfo;
}

export interface TasksResponseModel {
  count: number;
  tasks: TaskResponseModel[]
}



