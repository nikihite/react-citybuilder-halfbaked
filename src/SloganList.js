import React from 'react';
import Slogan from './Slogan';

export default function SloganList({ slogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      <ul> 
        { 
          slogans.map((slogan, i) => <Slogan key={slogan + i} slogan={slogan} />)
        }
      </ul>
    </section>
  );
}

{/* This kind of component should be familiar by now. It takes in (as props) an array of slogans */}
{/* Then map over those slogans and for each slogan, render a Slogan component. Supply a key and a slogan as props to each Slogan component */}