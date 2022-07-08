import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

function ColorBox() {
  const { state } = useContext(ColorContext);
  return (
    <div style={{ width: '64px', height: '64px', background: state.color }} />
  );
}

export default ColorBox;
