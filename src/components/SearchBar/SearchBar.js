import React from 'react';
import './style.css';

const SearchBar = () => {
  return (
    <>
    <div>
      <input name="usuario" placeholder="@username"/>
      <button>Search</button>
    </div>
  </>
  )
}

export { SearchBar };