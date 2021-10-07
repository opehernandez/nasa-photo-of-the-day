import React,{useState, useEffect} from "react";
import info from './const'
import axios from "axios";
import './App.css';

function ApodPage() {
    
    const [data, setdata] = useState(null)
    
    useEffect(() => {
        const {apodApi, personalKey} = info
        fetchData(apodApi, personalKey)
    }, [])
    
    function fetchData(url, key) {
        axios.get(`${url}${key}`)
        .then(resp => {
             setdata(resp.data)
        })
    }
    
    return (
        data &&
        <React.Fragment>
            
            <h1>{data.title}</h1>
            <img alt='' src={data.url}/>
            <p>{data.date}</p>
            <p className='description'>{data.explanation}</p>
            <h6>{data.copyright}</h6>

        </React.Fragment>
       


    )
}

export default ApodPage