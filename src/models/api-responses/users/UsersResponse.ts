import type {IUser} from "../../user/UserModel.ts";

export interface IUsersResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}