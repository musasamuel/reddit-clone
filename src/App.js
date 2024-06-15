import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideNav from './SideNav';
import Main from './Main';
import SubredditPosts from './SubredditPosts';
import SearchResults from './SearchResults';
import Posts from './Posts'
import Header from './Header';

function App() {
  return (
    <Router>
    <div className='App'>
      <div className='container'>
        <SideNav />
        <div className='main'>
          <Header /> {/* Include Header component */}
          <Routes>
            <Route path='/r/:subreddit' element={SubredditPosts} />
            <Route path='/search/:query' element={SearchResults} />
            <Route path='/' element={Main} />
          </Routes>
          <Posts /> 
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
