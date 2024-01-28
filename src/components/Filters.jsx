import React, { useState } from "react";
import { filterValues } from "../InstaFiltersVal";
const Filters = ({ currentValue, setFilter }) => {
  //   const [filter, setFilter] = useState("");
  const handleChange = (e) => {
    // setFilter(e.target.value);
    console.log(e.target.value);
    setFilter(e.target.value);
  };
  return (
    <select onChange={handleChange} value={currentValue}>
      {filterValues.map((item, i) => (
        <option key={i} value={item.class}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Filters;
