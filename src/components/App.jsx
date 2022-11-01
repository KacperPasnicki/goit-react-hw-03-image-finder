import React from 'react';
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends React.Component {
  render() {
  return (
    <div
    className='App'
    style={{
      height: '100%',
      color: '#010101',
      padding: '50px 10px',
      justifyContent: 'space-around'
     

      
    }}
    >
     <Searchbar />
    </div>
  );
};
}