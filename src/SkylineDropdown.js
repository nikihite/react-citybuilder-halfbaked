import React from 'react';

export default function SkylineDropdown({ setSkyline }) {
  return (
    <div>
      Select a Skyline
      <select onChange={e => setSkyline(e.target.value)}>
        <option value="pink">Pink</option>
        <option value="busy">Busy</option>
        <option value="foggy">Foggy</option>
      </select>
    </div>
  );
}

{/* this component should have a prop called setSkyline, which is a function */}
{/* on change, this component should use e.target.value to pass the correct id to the setSkyline function */}
{/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}