import {urls} from "../constants/urls.ts";
import type {UserType} from "../models/user/UserModel.ts";
import type {IDummyJsonUsersResponse} from "../components/DummyjsonResponses/UsersResponseModel.ts";

export const userService = {
    getUsers: {
        jsonplaceholder: async ():Promise<UserType[]> => {
            const res = await fetch(urls.users.jsonplaceholder.allUsers)
            return await res.json()
        },
        dummyjson: async ():Promise<UserType[]> => {
            const res = await fetch(urls.users.dummyjson.allUsers)
            const data = await res.json() as IDummyJsonUsersResponse
            return data.users
        }
    }
}