import React, { useEffect } from 'react';
import WriteActionButton from '../../components/write/WriteActionButton';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/write';

function WriteActionButtonsContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };
  const onCancle = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (postError) console.log(postError);
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancle={onCancle}
    ></WriteActionButton>
  );
}

export default WriteActionButtonsContainer;
