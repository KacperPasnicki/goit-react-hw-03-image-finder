import React from "react";
import PropTypes from 'prop-types';


export const Searchbar  = (props) => {
   
      
    
      
       
        return (
            <header className="Searchbar">
          <form className='SearchForm' 
          onSubmit={props.handleGetRequest}
         >
            <label >
            <input className='SearchForm-input'
            name='searchValue'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
            </label>
            <label>
            <button className='SearchForm-button' type="submit">&rArr;</button>
            </label>
         
        
            
          </form>
          </header>
        );
      }
  
   