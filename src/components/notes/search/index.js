import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Search(props) {
  const [query, setQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.searchNotes(query);
    }
  };

  return (
    <div className='columns is-vcentered'>
      <div className='column is-9 is-offset-1'>
        <input
          type='text'
          className='input'
          name={query}
          value={query}
          placeholder='Search note...'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className='column is-mobile is-1'>
        <button
          className='button is-text'
          onClick={() => {
            props.fetchNotes();
            setQuery('');
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            color='grey'
            className='is-pulled-left'
          />
        </button>
      </div>
    </div>
  );
}

export default Search;
