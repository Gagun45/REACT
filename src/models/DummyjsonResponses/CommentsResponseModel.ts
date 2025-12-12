import type {CommentType} from "../comment/CommentModel.ts";

export interface IDummyJsonCommentsResponse {
    comments: CommentType[];
    total: number;
    skip:number;
    limit:number;
}