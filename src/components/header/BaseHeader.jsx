import React from 'react';
import skan from '../../img/skan.png'
import rectangle from '../../img/rectangle 7.png'
import '../../styles/body.css'
import '../../styles/header.css'

const BaseHeader = () => {
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
                    <div className='head-3'>
                        <div className='right-block-header hrefa-base'>
                            <a  href='http://localhost:3000/'>Зарегистрироваться</a>
                            <div><img  className='hrefa-base img-rec' src={rectangle} alt='£'/></div>
                           <button className='button-header'><a href='http://localhost:3000/login'>Войти</a></button>
                        </div>

                    </div>
                </div>
            </header>





        </div>

    );
};

export default BaseHeader;