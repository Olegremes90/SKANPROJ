import React, {useContext} from 'react';
import '../../styles/tarif.css'
import  lampa from '../../img/lampa.png'
import darts from '../../img/darts.png'
import notebook from '../../img/notebook.png'
import price_new from '../../img/799 ₽.png'
import price_old from '../../img/1 200 ₽.png'
import price_new_pro from '../../img/1 299 ₽.png'
import price_old_pro from '../../img/2 600 ₽.png'
import price_old_business from '../../img/3 700 ₽.png'
import price_new_business from '../../img/2 379 ₽.png'
import galka from '../../img/galka.png'
import {authContext} from "../contexts/AuthContext";
const MainTarif = () => {
    const { setAuthData, auth } = useContext(authContext);

    return (
        <div>
        <div className='App'>
            {auth.data ?
            <div className='block-1'>
                <div className='insides-block'>
                    <div className='high-block'>
                        <h4 style={{fontSize: 20}}>Beginner</h4>
                        <span>Для небольшого исследования</span>
                    </div>
                    <div className='image-block'><img src={lampa} alt='#'/></div>
                </div>
                <div className='button-current'>
                    <button className='button-tarif'>Текущий тариф</button>
                </div>
                <div className='price-block'>
                    <img className='price-inside' src={price_new} alt='#'/>
                    <img src={price_old} alt='#'/>
                </div>
                <div className='rassrochka'>или 150 р/мес. при рассрочке на 24 мес.</div>
                <div className='tarif-option'> <span className='title-ul'>В тариф входит:</span>
                    <ul>
                        <li><img src={galka} alt='#'/> <span>Безлимитная история запросов</span></li>
                        <li><img src={galka} alt='#'/> <span>Безопасная сделка</span></li>
                        <li><img src={galka} alt='#'/> <span>Поддержка 24/7</span></li>
                    </ul>
                </div>
                <div className='button-beginner'>
                    <button className='button-kabinet'>Перейти в личный кабинет</button>
                </div>
            </div>
                :
                <div className='block-2'>
                    <div className='insides-block'>
                        <div className='high-block'>
                            <h4 style={{fontSize: 20}}>Beginner</h4>
                            <span>Для небольшого исследования</span>
                        </div>
                        <div className='image-block'><img src={lampa} alt='#'/></div>
                    </div>

                    <div className='price-block-1'>
                        <img className='price-inside' src={price_new} alt='#'/>
                        <img src={price_old} alt='#'/>
                    </div>
                    <div className='rassrochka'>или 150 р/мес. при рассрочке на 24 мес.</div>
                    <div className='tarif-option'> <span className='title-ul'>В тариф входит:</span>
                        <ul>
                            <li><img src={galka} alt='#'/> <span>Безлимитная история запросов</span></li>
                            <li><img src={galka} alt='#'/> <span>Безопасная сделка</span></li>
                            <li><img src={galka} alt='#'/> <span>Поддержка 24/7</span></li>
                        </ul>
                    </div>
                    <div className='button-beginner'>
                        <button className='button-detail'>Подробнее</button>
                    </div>
                </div>
            }


            <div className='block-2'>
                <div className='insides-block-1'>
                    <div className='high-block'>
                        <h4 style={{fontSize: 20}}>Pro</h4>
                        <span>Для HR и фрилансеров</span>
                    </div>
                    <div className='image-block-1'><img  src={darts} alt='#'/></div>
                </div>
                <div className='price-block-1'>
                    <img className='price-inside' src={price_new_pro} alt='#'/>
                    <img src={price_old_pro} alt='#'/>
                </div>
                <div className='rassrochka'>или 279 р/мес. при рассрочке на 24 мес.</div>
                <div className='tarif-option'> <span className='title-ul'>В тариф входит:</span>
                    <ul>
                        <li><img src={galka} alt='#'/> <span>Все пункты тарифа Beginner</span></li>
                        <li><img src={galka} alt='#'/> <span>Экспорт истории</span></li>
                        <li><img src={galka} alt='#'/> <span>Реокмендации по приоритетам</span></li>
                    </ul>
                </div>
                <div className='button-pro'>
                    <button className='button-detail'>Подробнее</button>
                </div>
            </div>
            <div className='block-2'>
                <div className='insides-block-2'>
                    <div className='high-block-1'>
                        <h4 style={{fontSize: 20}}>Business</h4>
                        <span>Для корпоративных клиентов</span>
                    </div>
                    <div className='image-block-2'><img src={notebook} alt='#'/></div>
                </div>
                <div className='price-block-1'>
                    <img className='price-inside' src={price_new_business} alt='#'/>
                    <img src={price_old_business} alt='#'/>
                </div>
                <div className='tarif-option-business'> <span className='title-ul'>В тариф входит:</span>
                    <ul>
                        <li><img src={galka} alt='#'/> <span>Все пункты тарифа Beginner</span></li>
                        <li><img src={galka} alt='#'/> <span>Экспорт истории</span></li>
                        <li><img src={galka} alt='#'/> <span>Реокмендации по приоритетам</span></li>
                    </ul>
                </div>
                <div className='button-pro'>
                    <button className='button-detail-business'>Подробнее</button>
                </div>
            </div>
        </div>

        </div>

)
                }

export default MainTarif;