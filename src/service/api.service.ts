import type {IDummyJsonUsersResponse} from "../models/IDummyJsonUsersResponse.ts";

export const getUsers = async (page: number) => {
    const LIMIT = 30;
    const skip = page < 1 ? 0 : page * LIMIT - LIMIT;
    const res = await fetch(`https://dummyjson.com/users?skip=${skip}`)
    const data:IDummyJsonUsersResponse = await res.json()
    return data.users
}