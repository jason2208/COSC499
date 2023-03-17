import React from 'react'
import Map from './map.js'
import Healers from './healers.js'
import './search.css'

class Search extends React.Component{
    render(){
        return(
        <div className='body'>
            <div className='healerFrame'>
            <Healers />
            </div>
            <div className='mapFrame'>
            <div className='center_bar'>   
            </div>
            <Map />
            </div>
        </div>
         
);
}
}

export default Search