import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WriteActionButton from '../../components/write/WriteActionButton';
import { changeField, writePost } from '../../modules/write';
import { withRouter } from 'react-router-dom';

const WriteActionButtonContainer = ({history}) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({write}) => (
        {
            title : write.title,
            body : write.body,
            tags : write.tags,
            post : write.post,
            postError : write.postError
        }
    ));

    const onCancle = () => {
        history.goBack();
    }

    const onPublish  = () => {
        dispatch(
            writePost({title, body, tags})
        )
    };

    useEffect(() => {
        if(post) {
            const { _id, username } = post;
            history.push(`/@${username}/${_id}`)
        }

        if(postError) {
            console.log(postError)
        }
    }, [post, postError, history]);

    return (
        <WriteActionButton onCancle = {onCancle} onPublish = {onPublish}/>
    );
};

export default withRouter(WriteActionButtonContainer);