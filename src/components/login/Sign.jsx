import React, {useContext, useState, useEffect} from 'react';
import key from '../../img/key.png'
import '../../styles/sign.css'
import google from '../../img/google.png'
import yandex from '../../img/yandex.png'
import face from '../../img/facebook.png'
import zamok from '../../img/zamok.png'
import MainFooter from "../body/MainFooter";
import Header from "../header/Header";
import axios from "axios";
import {authContext} from "../contexts/AuthContext";
const Sign = () => {
    const [password, setPassword] = useState()
    const [login, setPhone] = useState();
    const [error, setError] = useState('');
    const [phoneError, setphoneError] = useState('');
    const phoneRegex = /^\d{11}$/;


    const headers = {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
    const {setAuthData} = useContext(authContext);

    const validatePhone = (phone) => {
        // регулярное выражение для 10-значного номера телефона
        if (!phoneRegex.test(phone)) {
            setphoneError('Введите корректные данные');
            return false;
        } else {
            setphoneError('');
            return true;
        }
    };
    const validatePassword = (password) =>{
        if (!password){
            setError('Введите пароль');
            return false;
        } else {
            setError('');
            return true;
        }
    }
    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);
        validatePhone(value);
    };
    const handlePasswordChange =(event) =>{
        const value = event.target.value;
        setPassword(value);
        validatePassword(value)


    }

    const isFormValid = () =>{
        if(!login && !password){
            return true;
        }
        if(login && !password){
            return true;
        }

        if(!phoneRegex.test(login)){
            return true;
        }
        if(error){
            return true ;
        } else {
            return false;
        }

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', {login, password},
            {headers})
            .then((response) => {
                setAuthData(response.data);
                window.location.href = '/home'
         // Handle data
            })
            .catch((error) => {
                console.log(error);
            })
        ;

    };




    return (
        <div>

        <div className='sign-in-container'>
            <img className='zamok' src={zamok} alt='£'/>
            <div className='left-sign-in'>
                <span style={{fontFamily:'Ferry',fontSize: 30}}>ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ НА ТАРИФ, НЕОБХОДИМО АВТОРИЗОВАТЬСЯ.</span>
                <img className='key' src={key} alt='#'/>
            </div>
            <div>
                <form className='container-forma'  action="#" method="post" onSubmit={onFormSubmit}>

                    <div className='forma-title'>
                        <a className='fhod' href='#'>Войти</a>
                        <a className='registration' href='#'>Зарегистрироваться</a>

                    </div>
                    <p className='text-forma'><label>Логин или номер телефона:</label></p>
                    <p><input type='login' id='phone' value={login} onChange={handlePhoneChange} required/></p>
                    {phoneError && <div className="error">{phoneError}</div>}
                    <p className='text-forma'><label>Пароль:</label></p>
                    <p><input type='password' id='password' value={password} onChange={handlePasswordChange} required/></p>
                    {error && <div className="error">{error}</div>}

                    <p><button className='button-sign-in' type="submit" name="form_auth_submit"  >Войти</button></p>
                    <a href='#'>Восстановить пароль</a>
                    <p className='text-forma'>Войти через:</p>
                    <div className='container-social'>
                        <img className='face' src={google} alt='#'/>
                        <img className='face' src={face} alt='#'/>
                        <img className='face' src={yandex} alt='#'/>
                    </div>



                </form>
            </div>
        </div>
            <MainFooter/>
        </div>
    );
};

export default Sign;
