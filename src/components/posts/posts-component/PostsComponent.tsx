import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {postSliceActions} from "../../../redux/slices/postSlice/postSlice.ts";

export const PostsComponent = () => {
    const {posts} = useAppSelector(state => state.postSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, [])
    return (
        <div>
            <h3>Posts component</h3>
            <ul>
                {posts && posts.map((post) => (<PostComponent key={post.id} post={post}/>))}
            </ul>
        </div>
    );
};