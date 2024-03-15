import React from 'react';

const Filter = ({ filter, setFilter, setSort }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (sortType) => {
    setSort(sortType);
  };

  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => handleSortChange("Asc")}>A - Z</button>
          <button onClick={() => handleSortChange("Desc")}>Z - A</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
