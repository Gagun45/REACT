import {urls} from "../constants/urls.ts";
import type {UserType} from "../models/user/UserModel.ts";
import type {IDummyJsonUsersResponse} from "../models/DummyjsonResponses/UsersResponseModel.ts";
import type {PostType} from "../models/post/PostModel.ts";
import type {IDummyJsonPostsResponse} from "../models/DummyjsonResponses/PostsResponseModel.ts";
import type {CommentType} from "../models/comment/CommentModel.ts";
import type {IDummyJsonCommentsResponse} from "../models/DummyjsonResponses/CommentsResponseModel.ts";

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
    },
    getComments: {
        jsonplaceholder: async ():Promise<CommentType[]> => {
            const res = await fetch(urls.comments.jsonplaceholder.allComments)
            return await res.json()
        },
        dummyjson: async ():Promise<CommentType[]> => {
            const res = await fetch(urls.comments.dummyjson.allComments)
            const data = await res.json() as IDummyJsonCommentsResponse
            return data.comments
        }
    }
}