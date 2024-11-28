import React, { useState } from "react";

const Drop = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [species, setSpecies] = useState("");
  const [byear, setByear] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">
          <input
            type="text"
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
        </option>
        <option value="option1">
          Option 1
          <input
            type="text"
            placeholder="enter species"
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
        </option>
        <option value="option2">Option 2 
          
        </option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default Drop;
