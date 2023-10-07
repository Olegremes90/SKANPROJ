import React from 'react';
import doc from '../../img/Document.png'
import folders from '../../img/Folders.png'
import search from '../../img/search.png'
import '../../styles/request.css'
import ApiRequest from './ApiRequest'
const Search = () => {
    return (
        <div  className='search-container'>

            <div className='left-search'>
                <div className='title-search'>
                    <span  style={{fontFamily:'Ferry',fontSize: 40}}>НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ.</span>
                </div>
                <div className='search-text'>
                    <span>Задайте параметры поиска.</span>
                    <br/>
                    <span>Чем больше заполните, тем точнее поиск</span>
                </div>
               <ApiRequest/>
            </div>
            <div className='right-search'>
                <div>
                    <img  className='doc-folders' src={doc} alt='#'/>
                    <img src={folders} alt='#'/>
                </div>
                <img className='search-img' src={search} alt='#'/>
            </div>
        </div>
    );
};

export default Search;

