import React, {useContext} from 'react';
import main from "../../img/main.png";
import '../../styles/body.css'
import why from "../../img/why.png";
import {authContext} from "../contexts/AuthContext";
import Carusel from "./Carusel";
import {Link} from "react-router-dom";

const BodyHead = () => {
    const { auth } = useContext(authContext);
    console.log(auth)
    return (
        <div>
        <div className='container-body'>
            <div className='left-block'>
                <span className='text-block'>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН</span>
                <div className='text-block-2'>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                {auth.data ?
                    <Link className='request-body' to='/request'><button className='button-body'>Запросить данные</button></Link>
                    : <div></div>
                }
            </div>
            <div className='right-block'><img src={main} alt='£'/></div>

        </div>
            <h4 className='why-me'>ПОЧЕМУ ИМЕННО МЫ</h4>
            <Carusel/>
            <img className='why' src={why} alt='£'/>
            <h4 className='why-me'>НАШИ ТАРИФЫ</h4>

        </div>

    );
};

export default BodyHead;