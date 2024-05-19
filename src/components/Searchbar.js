import React from 'react'
import './Searchbar.css'

function Searchbar() {
    return (
        <div id='search-bar'>
            <div>
                <input type='text' placeholder='Search a album of your choice' />
            </div>
            <div><img id="search-icon" src='assets/Search icon.svg' alt='#' /></div>
            
        </div>
    )
}

export default Searchbar