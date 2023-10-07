import React from 'react';
import skan from "../../../../../SKAN/project_skan/src/img/skan.png";
import rectangle from  "../../../../../SKAN/project_skan/src/img/rectangle 7.png";

import '/Users/olegremeskevic/WebstormProjects/SKAN/project_skan/src/styles/body.css'

import '/Users/olegremeskevic/WebstormProjects/SKAN/project_skan/src/styles/header.css'

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-container">
                    <img src={skan} alt='№'/>
                    <div className='head-1'>
                        <a className='hrefa-1' href='http://localhost:3000/'>Главная</a>
                        <a  className='hrefa-1' href='http://localhost:3000/'>Тарифы</a>
                        <a  className='hrefa-1' href='http://localhost:3000/'>FAQ</a>
                    </div>
                    <div className='head-2'>
                        <div className='right-block-header hrefa-1'>
                            <a className='hrefa-1' href='http://localhost:3000/'>Зарегистрироваться</a>
                            <div><img  src={rectangle} alt='£'/></div>
                            <button className='button-header'>Выйти</button>
                        </div>

                    </div>
                </div>
            </header>





        </div>

    );
};

export default Header;