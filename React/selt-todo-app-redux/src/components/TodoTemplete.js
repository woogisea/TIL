import React from 'react';
import '../scss/TodoTemplete.scss';

const TodoTemplete = ({ children }) => {
    return (
        <div className="TodoTemplete">
            {children}
        </div>
    );
};

export default TodoTemplete;