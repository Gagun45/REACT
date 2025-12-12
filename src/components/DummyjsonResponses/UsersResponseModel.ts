import type {UserType} from "../../models/user/UserModel.ts";

export interface IDummyJsonUsersResponse {
    users: UserType[];
    total: number;
    skip:number;
    limit:number;
}