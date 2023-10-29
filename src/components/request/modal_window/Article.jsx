import React,{ useState} from 'react';
import getElements from "./AtricleItem";
import '../../../styles/loader2.css'
import {Link} from "react-router-dom";
const Article = ({res, show, loader}) => {
    const [index, setIndex] = useState(0);
    function addElement () {
        console.log(index)
        setIndex(index + 10);

    }

    function convertDate(str){
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join(".");
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

    return (
        <div>
            {loader
                ?
                <div className='loading-1'>Loading...</div>
                :
                <div>
                    <h2 className='svodka-2'>СПИСОК ДОКУМЕНТОВ</h2>
            {res.slice(0,10).map((item)=>{
                let str = item['issueDate']
                let current = convertDate(str)
                const source = item['source']['name']
                const title = item['title']['text']
                const attributes = item['attributes']
                const url = item['url']
                const xml = item['content']['markup']
                const wordCount = item['attributes']['wordCount']
                const xmlDoc = new DOMParser().parseFromString(xml, "text/xml")
                const text =  xmlDoc.querySelector("scandoc").textContent
                const withouthtml = text.replace(/<(.|\n)*?>/g, '')
                const items = xmlDoc.querySelectorAll("sentence");

                return(
                    <div className='m-content-container'>
                        <div className='article-block'>
                            <div className='m-title-container' id='img'>
                                <span  style={{opacity: 0.5}}>{current}</span>
                                <span className='m-source' style={{opacity: 0.5}}>{source}</span>
                                <h4 className='article-title'>{title}.</h4>
                            </div>
                            {items[items.length - 1].nextSibling !== null ?
                                <img className='article-img' src={nexSibling(items)} alt='#' />
                                : <div></div>
                            }
                            <div className='article-text'>
                                {withouthtml}
                            </div>
                            <div className='m-container-bottom'>
                                {url ?
                                    <div>
                                       <button  className='read-in-source'><Link to={url}>Читать в источнике</Link></button>
                                    </div>
                                    :<div></div>
                                }
                                <div className='wordcount'>
                                    <span>{wordCount} слов</span>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
            <div className='button-add'>
                {getElements({res, index, convertDate, nexSibling})}
                {index < res.length -1 ?
                <button className='add-article' onClick = {addElement}>Показать больше</button>
                    : <div></div>
                }
            </div>
                </div>
            }
        </div>

);
};
export default Article;