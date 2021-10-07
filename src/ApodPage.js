import { Link } from "react-router-dom";
import React,{useState, useEffect} from "react";
import info from './const'
import axios from "axios";

function ApodPage() {
    const {apodApi, personalKey} = info
    const [data, setdata] = useState(null)
    
    useEffect(() => {
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
            
            <h2>{data.title}</h2>
            <img src={data.url}/>
            <p>{data.date}</p>
            <p>{data.explanation}</p>
            <h6>{data.copyright}</h6>

        </React.Fragment>
       


    )
}

export default ApodPage