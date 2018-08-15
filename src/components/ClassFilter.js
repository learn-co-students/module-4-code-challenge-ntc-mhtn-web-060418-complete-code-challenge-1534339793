import React from "react";

const ClassFilter = props => {
  return (
    <div>
      <select>
        <option disabled selected value >Filter by Class</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Support">Support</option>
      </select>
    </div>
  )
}

export default ClassFilter;
