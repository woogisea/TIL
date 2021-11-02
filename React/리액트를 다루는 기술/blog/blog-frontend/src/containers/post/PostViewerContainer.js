import React, { useEffect } from 'react';
import PostViewer from '../../components/post/PostViewer';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostActionButton from '../../components/post/PostActionButton';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/post';

const PostViewerContainer = ({ match, history }) => {
    const { postId } = match.params;
    console.log(postId);
    const dispatch = useDispatch();
    const { post, error, loading, user } = useSelector(({post, loading, user}) => (
        {
            post : post.post,
            error : post.error,
            loading : loading['post/READ_POST'],
            user : user.user
        }
    ));

    useEffect(() => {
        dispatch(readPost(postId));

        return () => (
            dispatch(unloadPost())
        )
    }, [dispatch, postId]);

    const onEdit = () => {
        dispatch(setOriginalPost(post));
        history.push('/write');
    };

    const onRemove = async () => {
        try{
            await removePost(postId);
            history.push('/');
        }catch(e) {
            console.log(e);
        }
    }

    const ownPost = (user && user._id) === (post && post.user._id);

    return (
        <PostViewer post = {post} error = {error} loading = {loading} actionButton = {ownPost && <PostActionButton onEdit = {onEdit} onRemove = {onRemove}/>} />
    );
};

export default withRouter(PostViewerContainer);