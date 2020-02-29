import React from 'react';
import {Link} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa/index';

const Events = () => {
    return (
        <div className='events'>
            <div className='ev-header'>
               <input type='text' className='evn-search' placeholder='Search.,'/>
               <button className="search-btn round-obj">
          <FaSearch size={24} />
        </button>
        <button className='evn-btn create-event'>Create Event</button> 
        <button className='evn-btn create-event'>Create Event</button> 
            </div>
        <div className='eventsCont'></div>
        
            
        </div>
    )
}

export default Events
