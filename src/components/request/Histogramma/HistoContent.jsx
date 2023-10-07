import React, {useContext, useEffect} from 'react';
import {LevelContext} from "../../contexts/LevelContext";
import '../../../styles/modal.css'
import '../../../styles/loader1.css'

const HistoContent = ({ massiv, convertDate, loader}) => {

    const {end, start, Change} = useContext(LevelContext);
    useEffect(() => {
        if (massiv.loading) {
            Change(massiv)
        }

    }, []);
    console.log(end)
    console.log(massiv)



    return (
        <div className='histo-container'>
            <div className='container-left-histo inside-histo'>
                <div className='title-histo'>
                <div>Период</div>
                <div>Всего</div>
                <div>Риски</div>
                </div>
            </div>
            {!loader && massiv.loading
                ?
                <div className='container-data'>
            { massiv.data[0].data.slice(start, end).map((el, index)=>{
                const date = convertDate(el.date)
                return(
                    <div className='block-data'>
                        <div>{date}</div>
                        <div>{el.value}</div>
                        <div>{massiv.data[1].data[index+start].value}</div>

                    </div>
                )
            })}
            </div>
                :<div className='loading'>Loading</div>
            }
        </div>


    );
};

export default HistoContent;