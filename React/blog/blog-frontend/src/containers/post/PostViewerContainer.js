import React, { useEffect } from 'react';
import PostViewer from '../../components/post/PostViewer';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';

const PostViewerContainer = ({ match }) => {
    const { postId } = match.params;
    console.log(postId);
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector(({post, loading}) => (
        {
            post : post.post,
            error : post.error,
            loading : loading['post/READ_POST']
        }
    ));

    useEffect(() => {
        dispatch(readPost(postId));

        return () => (
            dispatch(unloadPost())
        )
    }, [dispatch, postId]);

    return (
        <PostViewer post = {post} error = {error} loading = {loading}/>
    );
};

export default withRouter(PostViewerContainer);