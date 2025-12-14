import type {IDummyJsonUsersResponse} from "../models/IDummyJsonUsersResponse.ts";

export const getUsers = async (skip: string) => {
    const res = await fetch(`https://dummyjson.com/users?skip=${skip}`)
    const data:IDummyJsonUsersResponse = await res.json()
    return data.users
}