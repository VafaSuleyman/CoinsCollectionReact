import React, { useState } from 'react';

const Filter = ({ setFilter }) => {

  const [nameFilter, setNameFilter] = useState('');
  const [compositionFilter, setCompositionFilter] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setFilter({name: nameFilter, composition: compositionFilter});
  };

  const handleList = () => {
    setNameFilter('');
    setCompositionFilter('');
    setFilter({name: '', composition: ''});
  };

  return (
    <div>
      <form>
        <label>Input field</label>
        <input
          type='text'
          name='name'
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleList}>List</button>
      </form>

      <select
        value={compositionFilter}
        onChange={(e) => {
          setCompositionFilter(e.target.value);
          setFilter({name: nameFilter, composition: compositionFilter});
        }}
      >
        <option value=''>Advanced filter</option>
        <option value='gold'>Gold</option>
        <option value='nickel'>Nickel</option>
        <option value='steel'>Steel</option>
      </select>
    </div>
  );
};

export default Filter;
