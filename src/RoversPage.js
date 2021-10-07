import React, {useState, useEffect} from "react"
import axios from "axios"
import './App.css';



function RoversPage() {
    const [data, setData] = useState(null)
    const [currentImg, setCurrentImg] = useState(0)
    useEffect(() => {
        fetchData()
    }, [])


    function fetchData() {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Kg7yBJHfAgffI4NcoAXV9zuJlZKCQEXBA0b1zSYB`)
        .then(res => {
            
            setData(res.data.photos)
        })
    }
    
    function nextPicture() {
        setCurrentImg(currentImg + 1)
    }
    function previousPicture() {
        if(currentImg !==0 ) {setCurrentImg(currentImg - 1)}
    }


    return (
        data &&
        <React.Fragment>
            <div className='gallery-wrapper'>
                <div className='left-arrow' onClick={previousPicture}></div>
                <img alt='' style={{width:'100%'}} src={data[currentImg].img_src}/>
                <div className='right-arrow' onClick={nextPicture}></div>
            </div>
            
        </React.Fragment>
    )
}










export default RoversPage