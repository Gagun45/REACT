import type {IPost} from "../../post/postModel.ts";

export interface IPostsResponse {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}