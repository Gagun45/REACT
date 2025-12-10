import type {ITodo} from "../models/TodoModel.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com/todos'

export const getTodos = async ():Promise<ITodo[]> => {
    const res = await fetch(baseUrl)
    return await res.json()
}