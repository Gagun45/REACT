import type {IUser} from "../../user/UserModel.ts";
import type {IBasicResponse} from "../BasicResponseModel.ts";

export interface IUsersResponse extends IBasicResponse {
    users: IUser[];
}