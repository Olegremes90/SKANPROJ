import React, {useEffect, useState} from 'react';
import '../../../styles/request.css'
const Inn = ({innData, ChangeInn, ChangeErrorInn}) => {
    console.log(innData)
    const [error, setError] = useState({message:'', style:'access'})
    useEffect(()=>{
        ChangeErrorInn(validateInn(innData,error))
    }, [innData])

    console.log(innData)
    function validateInn(innData, error) {
        let result = false;
        if (typeof innData === 'number') {
            innData = innData.toString();
        } else if (typeof innData !== 'string') {
            innData = '';
        }
        if (!innData.length) {
            error.code = 1;
        } else if (/[^0-9]/.test(innData)) {
            error.code = 2;
            error.message = 'ИНН может состоять только из цифр';
        }
       else if ([10, 12].indexOf(innData.length) === -1) {
            error.code = 3;
            error.message = 'ИНН может состоять только из 10 или 12 цифр';
        } else {
            let checkDigit = function (inn, coefficients) {
                let n = 0;
                for (let i in coefficients) {
                    n += coefficients[i] * inn[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (innData.length) {
                case 10:
                    var n10 = checkDigit(innData, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(innData[9])) {
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(innData, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    var n12 = checkDigit(innData, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(innData[10])) && (n12 === parseInt(innData[11]))) {
                        result = true;
                    }
                    break;
            }
            if (!result) {
                error.code = 4;
                error.message = 'Неправильное контрольное число';
            }
        }
        return result;
    }
    console.log(error.message)
    return (
        <div>
            <input type='text' value={innData} className={validateInn(innData, error) ? `${error.style}`: 'good'} onChange={ChangeInn} placeholder='10 цифр'/>
            {!validateInn(innData, error)?  <div className="error">{error.message}</div>: <div></div>}


        </div>
    );
};

export default Inn;