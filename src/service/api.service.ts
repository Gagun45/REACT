import type {IPost} from "../models/PostModel.ts";

const baseUrl = "https://jsonplaceholder.typicode.com"

export const getPosts = async ():Promise<IPost[]> => {
    const res = await fetch(`${baseUrl}/posts`)
    return await res.json()
}