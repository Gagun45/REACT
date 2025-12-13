import {urls} from "../constants/urls.ts";
import type {IUsersResponse} from "../models/apiResponse/users/UsersResponseModel.ts";
import type IUser from "../models/user/UserModel.ts";
import type {IPostsResponse} from "../models/apiResponse/posts/PostsResponseModel.ts";
import type {IPost} from "../models/post/postModel.ts";

export const apiService = {
    users: {
        getUsers: async (): Promise<IUser[]> => {
            const res = await fetch(urls.users.allUsers)
            const data: IUsersResponse = await res.json()
            return data.users
        }
    },
    posts: {
        getPosts: async (): Promise<IPost[]> => {
            const res = await fetch(urls.posts.allPosts)
            const data: IPostsResponse = await res.json()
            return data.posts
        }
    }
}