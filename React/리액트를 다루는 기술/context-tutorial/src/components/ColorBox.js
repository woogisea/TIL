import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorContext>
        {( {state}) => (
             <>
             <div style = {{
                 width: '64px',
                 height: '64px',
                 background: state.color
                 }}
             />

             <div style = {{
                 width: '64px',
                 height: '64px',
                 background: state.subcolor
                 }}
             />
         </>
        )}
        </ColorContext>
    );
};

export default ColorBox;