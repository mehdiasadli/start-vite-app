interface IMongoose {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IUser<C = false, V = false, VV = false, VC = false, CV = false> extends IMongoose {
  username: string;
  password: string;
  isAdmin: boolean;
  name: string;
  img?: string;

  voted?: C extends true ? ICategory<CV>[] : string[];
  votes?: V extends true ? IVote<VV, VC>[] : string[];
}

export interface ICategory<V = false> extends IMongoose {
  title: string;
  desc: string;

  votes?: V extends true ? IVote[] : string[];
}

export interface NomineeData<P = true> {
  nominee: P extends true ? IUser : string;
  point: 1 | 2 | 3;
}

export interface IVote<V = false, C = false, UC = false, CV = false, N = true> extends IMongoose {
  voter: V extends true ? IUser<UC, false> : string;
  category: C extends true ? ICategory<CV> : string;
  nominees: NomineeData<N>[];
}

export interface IUserStore {
  id: string;
  username: string;
  isAdmin: boolean;
}

export interface ILoginResponse extends IUserStore {
  token: string;
}
