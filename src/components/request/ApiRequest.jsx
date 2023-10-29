import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {authContext} from "../contexts/AuthContext";
import Modal from './modal_window/Modal'
import '../../styles/request.css'
import Inn from './validate/Inn'
import Limit from "./validate/Limit";
import Date from './validate/Date'
const ApiRequest = () => {



    const { auth, setAuthData } = useContext(authContext);
    console.log(auth)


    const [tonality, setTonality] = useState()
    const [limit, setLimit] = useState(undefined)
    const[start, setStart] = useState()
    const[end, setEnd] = useState()
    const[fullness, setFullness] = useState(false)
    const[business, setBusiness] = useState(null)
    const[mainRole, setMainRole] = useState(false)
    const[risk, setRisk] = useState(false)
    const[technews, setTechnews] = useState(false)
    const[announce, setAnounce] = useState(false)
    const[digets, setDigets] = useState(false)
    const[showModal, setShowModal] = useState(false)
    const[result, setResult] = useState([])
    const [massiv, setMassiv] = useState({loading:false, data: null})
    const [doc, setDoc] = useState({loading: false, info: []})
    const [loader, setLoader] = useState(false)
    const [data, setData] =useState()
    const [innData, setInnData] = useState(undefined);
    const [innError, setInnError] = useState(false)
    const[errorLimit, setErrorLimit] = useState(false)
    const[startDate, setStartDate] = useState(undefined)
    const[endDate, setEndDate] = useState(undefined)
    const[errorDate, setErrorDate] = useState(false)
    const[token, setToken] = useState()

    useEffect(() => {
        let tok = JSON.parse(localStorage.getItem('authData'))
        setToken(tok.accessToken)
    }, []);

    console.log(token)

    const headers = {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`

    }

    const state = {

        issueDateInterval: {
            "startDate": `${startDate}T00:00:00+03:00`,
            "endDate": `${endDate}T23:59:59+03:00`
        },
        searchContext: {
        targetSearchEntitiesContext: {
            targetSearchEntities: [
                {type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: innData,
                    maxFullness: fullness,
                    inBusinessNews: business
                }
            ],
                onlyMainRole: mainRole,
                tonality: tonality,
                onlyWithRiskFactors: risk,
                riskFactors: {
                and: [],
                    or: [],
                    not: []
            },
            themes: {
                and: [],
                    or: [],
                    not: []
            }
        },
        themesFilter: {
            and: [],
                or: [],
            not: []
        }
    },
        searchArea: {
        includedSources: [],
            excludedSource: [],
            includedSourceGroups: [],
            excludedSourceGroups: []
    },
        attributeFilters: {
        excludeTechNews: technews,
            excludeAnnouncements: announce,
            excludeDigests: digets
    },
        similarMode: "none",
        limit: limit,
        sortType: "issueDate",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: [
        "totalDocuments",
        "riskFactors"
    ]
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        setLoader(true)
        axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', state,
            {headers})
            .then((response) => {
                console.log({'histograms': response})
                setData(response)
                setMassiv({loading:true, data: response.data.data})
                setLoader(false)
                console.log(massiv)

                // Handle data
            })
            .catch((error) => {
                console.log(error);
            })
        axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/', state,
            {headers})
            .then((result) => {
                const items = result.data.items


                xxx(items)


            })
            .catch((error)=>{
                console.log(error)
            })
        setShowModal(true)

    }

    const closeModal = () => {
        setShowModal(false);



    }

    console.log(doc)
    async function xxx(arg) {
        const result_arr = [];
        for (const item of arg) {
            const ids = {
                ids:[item['encodedId']]
            }
            result_arr.push(await axios.post('https://gateway.scan-interfax.ru/api/v1/documents', ids, {headers} )
                .then((response)=>{
                    return response.data['0']['ok']
                })
                .catch((error)=>{
                    console.log(error)
                }))

        }

        return  setResult(result_arr);
    }
    const ChangeInn=(e)=>{
        setInnData((e.target.value))
    }
    const ChangeLimit=(e)=>{
        setLimit(e.target.value)
    }
    const ChangeStartDate=(e)=>{
        setStartDate(e.target.value)
    }
    const ChangeEndDate=(e)=>{
        setEndDate(e.target.value)
    }
    const ChangeErrorLimit=(data)=>{
        setErrorLimit(data)
    }
    const ChangeErrorInn=(data)=>{
        setInnError(data)
    }
    const ChangeErrorDate=(data)=>{
        setErrorDate(data)
    }



    console.log(result)
    console.log(innError, errorDate, errorLimit)
    return (

            <form  className='filter-search-1' action='' method='post' onSubmit={onFormSubmit}>
                <div  className='filter-search'>
                    <div className='container-inn'>
                        <div>
                            <span>ИНН компании*</span>
                            <p></p>
                        <Inn  className='input-and-choice' innData={innData}  ChangeInn={ChangeInn} ChangeErrorInn={ChangeErrorInn}/>
                        </div>
                        <div>
                            <p></p>
                            <span>Тональность</span>
                <p> <select className='form-select input-and-choice' value={tonality} onChange={e =>  setTonality(e.target.value)} name="pets" id="pet-select">
                    <option   value="any">Любая</option>
                    <option value="positive">Позитивная</option>
                    <option value="negative">Негативная</option>

                </select></p>
                        </div>
                        <div>
                            <span>Количество документов в выдаче*</span>
                            <p></p>
                            <Limit  limit={limit} ChangeLimit={ChangeLimit} ChangeErrorLimit={ChangeErrorLimit}/>
                        </div>

                    </div>
                    <div className='container-checkbox'>
                <div className='check'>
                    <input type='checkbox' id='checkbox-id' value={fullness} onChange={e => setFullness( e.target.checked ? current => !current : e.target.value)}  className='input-check'/><label htmlFor="checkbox-id" className='text-label'>Признак максимальной полноты</label>
                </div>
                <div className='check'>
                    <input type='checkbox' className='input-check' value={business} onChange={e=>setBusiness(e.target.checked ? current => !current : e.target.value)}/><label className='text-label'>Упоминание в бизнес-контексте</label>
                </div>
                <div className='check'>
                    <input type='checkbox' className='input-check' value={mainRole} onChange={e=>setMainRole(e.target.checked ? current => !current : e.target.value)}/><label className='text-label'>Главная роль в публикации</label>
                </div>
                <div className='check'>
                    <input type='checkbox' className='input-check' value={risk} onChange={e=>setRisk(e.target.checked ? current => !current : e.target.value)}/><label className='text-label' >Публикации только с риск-факторами</label>
                </div>
                <div className='check'>
                    <input type='checkbox' className='input-check' value={technews} onChange={e=>setTechnews(e.target.checked ? current => !current : e.target.value)}/><label className='text-label'>Включать технические новости рынка</label>
                </div>
                <div className='check'>
                    <input type='checkbox' className='input-check' value={announce} onChange={e=>setAnounce(e.target.checked ? current => !current : e.target.value)}/><label className='text-label'>Включать анонсы и календари</label>
                </div>
                <div className='check'>
                    <input type='checkbox' className='input-check' value={digets} onChange={e=>setDigets(e.target.checked ? current => !current : e.target.value)}/><label className='text-label'>Включать сводки новостей</label>
                </div>
                    </div>
                </div>
                <div>
                    <div className='bottom-container'>Диапозон поиска*</div>
                <div className='filter-search on-date-search'>
                <Date startDate={startDate} endDate={endDate} ChangeErrorDate={ChangeErrorDate} ChangeStartDate={ChangeStartDate} ChangeEndDate={ChangeEndDate}/>
                 <Modal res={result} show={showModal} onCloseButtonClick={closeModal} massiv={massiv} loader={loader} data={data}/>
                    <div>
                <button  type="submit" name="form_auth_submit" className='b-search' disabled={ !innError || !errorLimit || !errorDate}>Отправить</button>
                        <p style={{opacity: 0.5, fontSize: 12, marginLeft: 20}}>*Обязательныe к заполнению поля</p>
                    </div>
                </div>
                </div>
            </form>



    );
};

export default ApiRequest;