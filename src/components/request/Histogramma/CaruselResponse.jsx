import React, {useState, useEffect, useContext} from 'react';
import '../../../styles/modal.css'
import {LevelContext} from "../../contexts/LevelContext";
import 'swiper/css';
import left from '../../../img/left.png'
import right from '../../../img/right.png'



const CaruselResponse = (props) => {


    const {children} = props
    const level = useContext(LevelContext);


    console.log(level)
    console.log(children.length)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const [dataLength, setDataLength] =useState(0)
    const[histo, setHisto] = useState([])
    const[loading, setLoading] = useState(false)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(8)

// Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const Change=(data)=>{
        console.log(data)
        setDataLength(data)
    }




    console.log(dataLength)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
        if (end <= dataLength.data[0].data.length-1) {
            setEnd(prefEnd => prefEnd + 8)
            setStart(prefStart => prefStart + 8)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        if (start > 0) {
            setEnd(prefEnd => prefEnd - 8)
            setStart(prefStart => prefStart - 8)
        }
    }


    console.log(loading)
    console.log(end)
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                <img className='left-arrow' src={left} onClick={prev} alt='£' id='arrow'/>

                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        <LevelContext.Provider value={{end, start, Change}}>
                            {children}
                        </LevelContext.Provider>

                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                 <img className='right-arrow' src={right} onClick={next} alt='£'/>
            </div>
        </div>
    );
};

export default CaruselResponse;