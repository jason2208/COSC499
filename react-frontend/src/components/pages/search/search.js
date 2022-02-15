import React from 'react'
import Map from './map.js'
import './search.css'

class Search extends React.Component{
    render(){
        return(
        <div className='body'>
            <div className='healerFrame'>
                <div className='location'>
            
                </div>
                <div className='sortBar'>

                </div>
                <div className='healers'>

                </div>
            </div>
            <div className='mapFrame'>
            <Map />
            </div>
        </div>
         
);
}
}

export default Search