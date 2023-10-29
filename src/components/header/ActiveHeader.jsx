import React,{useContext, useState, useEffect} from 'react';
import skan from "../../img/skan.png";
import '../../styles/loader2.css'
import axios from 'axios';
import { authContext } from "../contexts/AuthContext";
import '../../styles/header.css'
import portret from '../../img/portret.png'
import {useNavigate} from "react-router-dom";

const ActiveHeader = () => {
    const navigate = useNavigate()
    const { setAuthData, auth } = useContext(authContext);
    const [result, setResult] = useState({});
    const [avaLoader, setAvaLoader] = useState(false)
    console.log(auth)

    const headers = {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${auth.data? auth.data.accessToken : null} `
    }
    useEffect(() =>{

            setAvaLoader(true)
            axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {headers}).then((response) => {
                console.log(response.data)
                setResult(response.data.eventFiltersInfo)
                setAvaLoader(false)
                console.log(result)

            }).catch((error) => {
                console.log(error)
            })

    },[auth.loading])
    console.log(result)


    const onLogOut = () => {
        setAuthData(null);
        localStorage.removeItem('authData')
        navigate('/login')

    }
    return (
        <div>
            <header>
                <div className="header-container">
                    <img src={skan} alt='№'/>
                    <div className='head-1'>
                        <a className='hrefa-1' href='http://localhost:3000/'>Главная</a>
                        <a  className='hrefa-1' href='#'>Тарифы</a>
                        <a  className='hrefa-1' href='#'>FAQ</a>
                    </div>
                    <div className='container-info-account'>
                        {!avaLoader ?
                            <div>
                        <div className='used'>
                            <div className='used-count'>Использовано компаний</div>
                            <div className='limit'>{result['usedCompanyCount']}</div>
                        </div>
                        <div className='used'>
                            <div className='used-count' >Лимит по компаниям</div>
                            <div className='limit-1'>{result['companyLimit']}</div>
                        </div>
                            </div>
                            :
                            <div className='loading-1'>Loading...</div>
                        }

                    </div>
                    <div className='head-2'>
                        <div className=' hrefa-1 out'>
                            <div className='name'>Алексей А.</div>
                            <button onClick={onLogOut} className='out-1'>Выйти</button>
                        </div>
                        <div className='portret'><img  src={portret} alt='£'/></div>
                    </div>


                </div>
            </header>
        </div>

    );
};

export default ActiveHeader;