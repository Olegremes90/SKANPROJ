import React, {useState} from 'react';
import '../../../styles/modal.css'
import ActiveHeader from "../../header/ActiveHeader";
import girl from '../../../img/girl.png'
import close from '../../../img/close.svg'
import Article from "./Article";
import Histogramma from "../Histogramma/Histogramma";
import '../../../styles/loader2.css'



const Modal = ({res, show, onCloseButtonClick, massiv, loader, data}) => {
    const [index, setIndex] = useState(0);
    if (!show) {
        return null;
    }


    function convertDate(str){
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join(".");
    }


    console.log(data)
    const CloseClean = ()=>{
        onCloseButtonClick()
        setIndex(10)
    }
    function nexSibling(arg){
        if (arg[arg.length - 1].nextSibling !== null) {
            const img = (arg[arg.length - 1].nextSibling.textContent)
            const parser = new DOMParser()

            const html = parser.parseFromString(img, 'text/html');
            const imgHtml = html.body.querySelector('img').src
            console.log(imgHtml)
            return imgHtml

        }
    }




    console.log(res)


    return (

        <div className="modal-wrapper">
            <div className="modal">
                <img className='img-close' onClick={CloseClean}  src={close} alt='£'/>
                <ActiveHeader сlassName='header-modal'/>
                <div className='modal-container'>
                    <div className='container-searching'>
                        <span className='searching'>ИЩЕМ. СКОРО</span>
                        <br/>
                        <span className='searching'>БУДУТ РЕЗУЛЬТАТЫ</span>
                        <p><span className='waiting'>Поиск может занять некоторое время,</span>
                            <br/>
                            <span className='waiting'>просим сохранять терпение</span></p>
                    </div>
                    <div className='girl-container'>
                        <img className='girl-img' src={girl} alt='£'/>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='svodka'>ОБЩАЯ СВОДКА</h2>

                        {massiv.loading ?
                            <div>
                            <p className='variants'>Найдено {data.headers['content-length']} вариантов</p>
                        <Histogramma massiv={massiv} convertDate={convertDate} loader={loader}/>
                            </div>
                            :<div></div>
                        }

                    </div>

                    {res.length <= 10
                        ?
                        <div>
                        {loader
                            ?
                            <div className='loading-1'>Loading...</div>
                            :

                            <div>
                                <h2 className='svodka-2'>СПИСОК ДОКУМЕНТОВ</h2>
                                {res.map((item, index) => {
                                    console.log(item['content']['markup'])
                                    let str = item['issueDate']
                                    let current = convertDate(str)
                                    const source = item['source']['name']
                                    const title = item['title']['text']
                                    const attributes = item['attributes']
                                    const url = item['url']
                                    const xml = item['content']['markup']
                                    const xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
                                    const wordCount = item['attributes']['wordCount']
                                    const text = xmlDoc.querySelector("scandoc").textContent
                                    const withouthtml = text.replace(/<(.|\n)*?>/g, '')
                                    const items = xmlDoc.querySelectorAll("sentence");


                                    return (
                                        <div  className='m-content-container'>
                                            <div className='article-block'>
                                                <div className='m-title-container'>
                                                    <span style={{opacity: 0.5}} key={item.index}>{current}</span>
                                                    <span className='m-source' style={{opacity: 0.5}} key={item.index}>{source}</span>
                                                    <h4 className='article-title' key={item.index}>{title}.</h4>
                                                </div>
                                                {items[items.length - 1].nextSibling !== null ?
                                                    <img className='article-img' src={nexSibling(items)} alt='#' key={item.index}/>
                                                    : <div></div>
                                                }
                                                <div className='article-text'>
                                                    {withouthtml}
                                                </div>
                                                <div className='m-container-bottom'>
                                                    {url ?
                                                        <div key={item.index}>
                                                            <a href={url}>
                                                                <button className='read-in-source'>Читать в источнике
                                                                </button>
                                                            </a>
                                                        </div>
                                                        : <div></div>
                                                    }
                                                    <div className='wordcount'>
                                                        <span>{wordCount} слов</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}


                            </div>
                    }
                        </div>


                        : <div>
                            <Article res={res} index={index} loader={loader}/>

                        </div>
                    }





                </div>

            </div>
        </div>
    );
};

export default Modal;
