import React from 'react';
import TagBox from '../../components/write/TagBox';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';

function TagBoxContainer() {
  const tags = useSelector(({ write }) => write.tags);
  const dispatch = useDispatch();

  const onChangeTags = (nextTags) => {
    dispatch(changeField({ key: 'tags', value: nextTags }));
  };
  return <TagBox tags={tags} onChangeTags={onChangeTags}></TagBox>;
}

export default TagBoxContainer;
