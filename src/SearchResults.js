// SearchResults.js
import React, { useState, useEffect } from 'react';
import { searchReddit } from './redditAPI';
import './Posts.css';
import { useParams } from 'react-router-dom';

export default function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const searchResults = await searchReddit(query);
        setResults(searchResults);
      } catch (error) {
        setError(error);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <ul className='posts'>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
