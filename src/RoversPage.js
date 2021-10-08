import React, {useState, useEffect} from "react"
import axios from "axios"
import './App.css';
import rightArrow from './assets/right-arrow.png'
import leftArrow from './assets/left-arrow.png'



function RoversPage() {
    const [data, setData] = useState(null)
    const [currentImg, setCurrentImg] = useState(0)
    useEffect(() => {
        fetchData()
    }, [])


    function fetchData() {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Kg7yBJHfAgffI4NcoAXV9zuJlZKCQEXBA0b1zSYB`)
        .then(res => {
            console.log(res)
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
            <div className='content-wrapper'>
                <div className='info-panel'>
                    <h3 className='info-title'>Shot by: {data[currentImg].rover.name}</h3>
                    <p className='info-description'>with the {data[currentImg].camera.full_name}</p>
                    <p className='info-description'>on {data[currentImg].earth_date}</p>
                </div>
                <div className='gallery-wrapper'>
                    <img alt='' className='left-arrow' onClick={previousPicture} src={leftArrow}/>
                    <img alt='' style={{width:'100%', overflow: 'hidden'}} src={data[currentImg].img_src}/>
                    <img alt='' className='right-arrow' onClick={nextPicture} src={rightArrow}/>
                </div>
            </div>
            
            
        </React.Fragment>
    )
}










export default RoversPage