import React from 'react'
import './SideNav.css'
import logo from '../src/assets/reddit-seeklogo 2.svg'
import { Link,  useNavigate } from 'react-router-dom';

export default function SideNav(){
    const menus = [
      { to: '/r/popular', text: "Popular" },
      { to: '/r/all', text: "All"},
      { to: '/r/random', text: "Random" }
    ]
    const subreddits = [
      "askreddits",
      "worldnews",
      "videos",
      "funny",
      "todayilearned",
      "pics",
      "gaming",
      "movies",
      "news",
      "gift",
      "aww",
      "mildlyinteresting",
      "showerthoughts",
      "televsion",
      "jokes",
      "science",
      "soccer",
      "internetisbeautiful",
      "dataisbeautiful",
    ]
    const  navigate =  useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      navigate.push(`/search/${query}`);
    }
  };
    return(
      <div className='sidenav'>
         <div className='sidenav_logo'>
           <img src={logo} alt="Logo" />
         </div>
         <div className='sidenav_search'>
           <input type='text' name='search' placeholder='Search Reddit' onKeyPress={handleSearch}/>
           <i className="fa fa-search"></i>
         </div>
         <div className='sidenav_link'>
           <ul className='sidenav_menu'>
             {menus.map(menu => (
               <li key={menu.to}><Link to={menu.to}>{menu.text}</Link></li>
             ))}
           </ul>
           <hr/>
           <ul className='sidenav_subreddit'>
             {subreddits.map(subreddit => (
               <li key={subreddit}><Link to={`/r/${subreddit}`}>{subreddit}</Link></li>
             ))}
           </ul>
         </div>
      </div>
    )
}