import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WriteActionButton from '../../components/write/WriteActionButton';
import { updatePost, writePost } from '../../modules/write';
import { withRouter } from 'react-router-dom';

const WriteActionButtonContainer = ({history}) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError, originalPostId } = useSelector(({write}) => (
        {
            title : write.title,
            body : write.body,
            tags : write.tags,
            post : write.post,
            postError : write.postError,
            originalPostId : write.originalPostId
        }
    ));

    const onCancle = () => {
        history.goBack();
    }

    const onPublish  = () => {
        if(originalPostId) {
            dispatch(updatePost({title, body, tags, id : originalPostId}))
            return;
        }
        dispatch(
            writePost({title, body, tags})
        )
    };

    useEffect(() => {
        if(post) {
            const { _id, user } = post;
            history.push(`/@${user.username}/${_id}`)
        }

        if(postError) {
            console.log(postError)
        }
    }, [post, postError, history]);

    return (
        <WriteActionButton onCancle = {onCancle} onPublish = {onPublish} isEdit = {originalPostId}/>
    );
};

export default withRouter(WriteActionButtonContainer);