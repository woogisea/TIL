import React from 'react';
import TagBox from '../../components/write/TagBox';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';

const TagBoxContainer = () => {
    const { tags } = useSelector(({write}) => (
        {
            tags : write.tags
        }
    ));
    
    const dispatch = useDispatch();

    const onChangeTags = nextTags => {
        dispatch(
            changeField(
                {
                    key : 'tags',
                    value : nextTags,
                }
            )
        );
    };

    return (
        <div>
            <TagBox tags = {tags} onChangeTags = {onChangeTags} />
        </div>
    );
};

export default TagBoxContainer;