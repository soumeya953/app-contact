import React from 'react';
import TitlePage from '../../UI/TitlePage';
import PostGrid from '../../PostGrid';




const Index = (
    {articleState}
) => {
    return (
        <div>
            <TitlePage title = "Home"/>
            <div className="contact__list">
                <PostGrid listState={articleState}/>
            </div>
        </div>
    );
}

export default Index;
