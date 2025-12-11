import type {IComment} from "../models/CommentModel.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getComments = async ():Promise<IComment[]> => {
    const res = await fetch(`${baseUrl}/comments`)
    return await res.json()
}