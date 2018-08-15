import React from "react";

const Filter = props => {
  return (
    <select
      className="filter"
      value={props.searchTerm}
      onChange={event => props.filterBots(event.target.value)}
    >
      <option value="">All</option>
      <option value="Assault">Assault</option>
      <option value="Defender">Defender</option>
      <option value="Support">Support</option>
    </select>
  );
};

export default Filter;
