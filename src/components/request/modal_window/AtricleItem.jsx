import React from 'react';

export default function getElements({res, index, convertDate, nexSibling}){
    return (
        <div>
            {res.slice(10,index+10).map((item)=>{
                let str = item['issueDate']
                let current = convertDate(str)
                const source = item['source']['name']
                const title = item['title']['text']
                const attributes = item['attributes']
                const url = item['url']
                const xml = item['content']['markup']
                const wordCount = item['attributes']['wordCount']
                const xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
                console.log(xml)
                const text =  xmlDoc.querySelector("scandoc").textContent
                const withouthtml = text.replace(/<(.|\n)*?>/g, '')
                console.log(withouthtml)
                const items = xmlDoc.querySelectorAll("sentence");
                console.log(items)
                console.log(items)
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
                                        <a href={url}><button  className='read-in-source'>Читать в источнике</button></a>
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

        </div>

    );
}