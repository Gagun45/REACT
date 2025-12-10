import type {ITodo} from "../models/TodoModel.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getTodos = async ():Promise<ITodo[]> => {
    const res = await fetch(`${baseUrl}/todos`)
    return await res.json()
}