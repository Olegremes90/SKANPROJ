import React from 'react';
import { register } from "swiper/element/bundle";
import HistoContent from "./HistoContent";
import '/Users/olegremeskevic/WebstormProjects/SKAN/project_skan/src/styles/carusel.css'
import CaruselResponse from "./CaruselResponse";



register();

const Histogramma = ({ massiv, convertDate, loader}) => {



    return (

        <CaruselResponse>
           <HistoContent massiv={massiv} convertDate={convertDate} loader={loader}/>
        </CaruselResponse>


    );
};

export default Histogramma;