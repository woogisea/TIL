import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagBox from '../../components/write/TagBox';
import { changeField } from '../../modules/write';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector(({ write }) => write.tags);

  const onChangeTags = (e) => {
    dispatch(changeField({ key: 'tags', value: e }));
  };
  return <TagBox tags={tags} onChangeTags={onChangeTags}></TagBox>;
};

export default TagBoxContainer;
