import React from 'react';
import PostCard from '../PostCard';
import "./style.css";

const Index = ({
    listState
}) => {
    return (
        <div className='post__grid'>
            {listState.map(
                (item_list) => (
                    <PostCard item_list={item_list}/>
                ) 
            )}
        </div>
    );
}

export default Index;
