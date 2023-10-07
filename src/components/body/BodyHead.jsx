import React, {useContext} from 'react';
import main from "../../../../../SKAN/project_skan/src/img/main.png";
import '/Users/olegremeskevic/WebstormProjects/SKAN/project_skan/src/styles/body.css'
import MySwiper from "./Carusel";
import why from "../../../../../SKAN/project_skan/src/img/why.png";
import MainTarif from "./MainTarif";
import {authContext} from "../contexts/AuthContext";
import Carusel from "./Carusel";

const BodyHead = () => {
    const { setAuthData, auth } = useContext(authContext);
    return (
        <div>
        <div className='container-body'>
            <div className='left-block'>
                <span className='text-block'>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН</span>
                <div className='text-block-2'>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                {auth.data ?
                    <button className='button-body'><a className='request-body' href='http://localhost:3000/request-data'>Запросить данные</a></button>
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