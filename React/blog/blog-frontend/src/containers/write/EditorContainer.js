import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

function EditorContainer() {
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <Editor title={title} body={body} onChangeField={onChangeField}></Editor>
  );
}

export default EditorContainer;
