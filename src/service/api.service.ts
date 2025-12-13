import {urls} from "../constants/urls.ts";
import type {IUser} from "../models/user/UserModel.ts";
import type {IUsersResponse} from "../models/api-responses/users/UsersResponse.ts";

export const apiService = {
    getUsers: async (): Promise<IUser[]> => {
        const res = await fetch(urls.users)
        const data:IUsersResponse = await res.json()
        return data.users
    }
}