import type {IUser} from "./IUser.ts";

export interface IDummyJsonUsersResponse {
    users: IUser[];
    skip: number;
    total: number;
    limit: number;
}