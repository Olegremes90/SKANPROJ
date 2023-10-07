import React, {useState, useEffect} from 'react';
import '../../../styles/request.css'
const Limit = ({limit, ChangeLimit, ChangeErrorLimit}) => {
    const [error, setError] = useState({mes:'', style:'access'})
    useEffect(()=>{
        ChangeErrorLimit(ValidateLimit(limit,error))
    }, [limit])
    console.log(limit)
    function ValidateLimit(limit, error){
        const checkingNumber = /^\d+$/.test(limit)
        const number = Number(limit)
        if(limit === ''){
            error.mes = ''
            return false
        }
        if (!checkingNumber && limit !==undefined){
            error.mes = 'Введите числа!'
            return false
        } else if(number > 1000){
            error.mes = 'Введите число меньше 1000'
            return false
        }
        return true

    }


    return (
        <div>
            <input value={limit} className={ValidateLimit(Limit, error) ? `${error.style}`: 'good'} type='text'  onChange={ChangeLimit} placeholder='от 1 до 1000' required />
            {!ValidateLimit(limit, error)?  <div className="error">{error.mes}</div>: <div></div>}
        </div>
    );
};

export default Limit;