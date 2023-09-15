import React from 'react';
import TitlePage from '../../UI/TitlePage';
import Input from '../../UI/Input';


const Index = () => {
    const info_form = [
        {title:"firstname", type : "text"},
        {title:"lastname", type : "text"},
        {title:"email", type : "email"},
        {title:"password", type : "password"}
    ]
    return (
        <div>
            <TitlePage title = "Register"/>
            <form className='register__form' action='' method='post'>
            <ul>
                 {
                    info_form.map(formItem => (
                        <li> 
                            <label for="firstname">{formItem.title}</label>
                            <Input title={formItem.title} type={formItem.type}/>
                        </li>
                    ))
                }
            </ul>

            <div class="button">
                <button type="submit">Enregistrer</button>
            </div>
            </form>
        </div>
    );
}

export default Index;
