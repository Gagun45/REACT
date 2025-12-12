import type {PostType} from "../post/PostModel.ts";

export interface IDummyJsonPostsResponse {
    posts: PostType[];
    total: number;
    skip:number;
    limit:number;
}