import React, {useEffect, useState} from 'react';
import '../../../styles/request.css'
const Date = ({startDate, endDate, ChangeErrorDate, ChangeStartDate, ChangeEndDate}) => {
    const [error, setError] = useState({message:'', style:'access'})
    useEffect(()=>{
        ChangeErrorDate(validateDate(startDate, endDate, error))
    }, [startDate, endDate])
    function validateDate(startDate, endDate, error){
        if (!startDate || !endDate){
            error.message = ''
            return false
        }
        else if (endDate < startDate){
            error.message = 'Неккоректные даты'
            return false
        }
        return true
    }

    return (
        <div>
        <div className='date-input-cont'>
            <div className='input-start'><input className={validateDate(startDate, endDate, error) ? `${error.style}`: 'good'} type='text' placeholder='Дата начала' value={startDate} onChange={ChangeStartDate} onFocus={(e) => (e.target.type = "date")} /></div>
            <div  className='input-end'><input className={validateDate(startDate, endDate, error) ? `${error.style}`: 'good'} type='text' placeholder='Дата конца' value={endDate} onChange={ChangeEndDate} onFocus={(e) => (e.target.type = "date")}  /></div>
        </div>
            {!validateDate(startDate, endDate, error)?  <div className="error">{error.message}</div>: <div></div>}
        </div>
    );
};

export default Date;