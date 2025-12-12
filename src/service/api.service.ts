import {urls} from "../constants/urls.ts";
import type {UserType} from "../models/user/UserModel.ts";
import type {IDummyJsonUsersResponse} from "../models/DummyjsonResponses/UsersResponseModel.ts";
import type {PostType} from "../models/post/PostModel.ts";
import type {IDummyJsonPostsResponse} from "../models/DummyjsonResponses/PostsResponseModel.ts";

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
    },
    getPosts: {
        jsonplaceholder: async ():Promise<PostType[]> => {
            const res = await fetch(urls.posts.jsonplaceholder.allPosts)
            return await res.json()
        },
        dummyjson: async ():Promise<PostType[]> => {
            const res = await fetch(urls.posts.dummyjson.allPosts)
            const data = await res.json() as IDummyJsonPostsResponse
            return data.posts
        }
    }
}