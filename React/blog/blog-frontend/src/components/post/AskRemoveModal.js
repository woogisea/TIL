import React from 'react';
import AskModal from '../common/AskModal';

const AskRemoveModal = ({visible, onCancle, onConfirm}) => {
    return (
        <AskModal visible = {visible} onCancle = {onCancle} onConfirm = {onConfirm}/>
    );
};

export default AskRemoveModal;