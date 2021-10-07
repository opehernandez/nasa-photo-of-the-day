import React from "react"
import './App.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <React.Fragment>
            <div className='nav-wrapper'>
                <div  className='nav-buttons-wrapper'>
                    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>HOME</Link>
                </div>
                <div  className='nav-buttons-wrapper'>
                    <Link to='/apod' style={{textDecoration: 'none', color: 'white'}}>APOD</Link>
                </div>
                <div  className='nav-buttons-wrapper'>
                    <Link to='/rovers' style={{textDecoration: 'none', color: 'white'}}>ROVERS</Link>
                </div>
                <div  className='nav-buttons-wrapper'>
                    <Link to='/gallery' style={{textDecoration: 'none', color: 'white'}}>GALLERY</Link>
                </div>
                
            </div>
        </React.Fragment>
    )
}










export default Nav