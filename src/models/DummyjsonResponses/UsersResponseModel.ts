import type {UserType} from "../user/UserModel.ts";

export interface IDummyJsonUsersResponse {
    users: UserType[];
    total: number;
    skip:number;
    limit:number;
}