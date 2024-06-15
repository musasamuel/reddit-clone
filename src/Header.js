import React from 'react';
import './Header.css'

export default function Header() {
    return(
        <div className='header'>
          <div className='header_left'>
            <ul>
                <li><a href="/r/popular" className='active'>Popular</a></li>
                <li><a href="/r/hot" className='active'>Hot</a></li>
                <li><a href="/r/rising" className='active'>Rising</a></li>
                <li><a href="/r/controversial" className='active'>controversial</a></li>
                <li><a href="/r/gilded" className='active'>Gilded</a></li>
            </ul>
          </div>
          <div className='header_right'>
            <i className='fa fa-bell'/>  
          </div>
        </div>
    )
}