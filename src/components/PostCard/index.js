import React from 'react';

const Index = ({
    item_list
}) => {
    return (
        <div className='post__card'>
            <h2>{item_list.title}</h2>
        </div>
    );
}

export default Index;
