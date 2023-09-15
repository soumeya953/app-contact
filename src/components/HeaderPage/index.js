import React from 'react';
import './style.css';

const Index = () => {
    const menu = [
        {title:"Home"},
        {title:"News"},
        {title:"Register"},
        {title:"Contact"}
    ]

    let path = "http://localhost:3000/";
    
    return (
        <header className='header__main'>
            <div className='header__logo'>
                <img src="../logo_contact.png" alt="logo_contact"></img>
            </div>

            <div>
                <nav  className='header__nav'>
                    <ul  className='header__list'>
                    {
                        menu.map(menuItem => (
                            <li className='item__nav'>
                                <a className='item__link' href={
                                    menuItem.title !== "Home" ? (path+menuItem.title) : path }
                                    >{menuItem.title}</a>
                            </li>
                        ))
                    }
                        
                    </ul>
                </nav> 

            </div>

            
        </header>
    );
}

export default Index;
