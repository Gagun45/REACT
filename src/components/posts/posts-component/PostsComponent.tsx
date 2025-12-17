import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {loadPosts} from "../../../redux/slices/postSlice/postSliceActions.ts";

export const PostsComponent = () => {
    const {posts} = useAppSelector(state => state.postSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(loadPosts())
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