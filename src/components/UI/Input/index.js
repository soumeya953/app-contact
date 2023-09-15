import React from 'react';

const Index = ({
    title,
    type
}) => {
    return (
        <span>
            <input type={type} name={title} />
        </span>
    );
}

export default Index;
