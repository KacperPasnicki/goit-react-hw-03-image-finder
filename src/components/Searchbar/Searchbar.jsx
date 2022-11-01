import React from "react";



export class Searchbar extends React.Component {
    
      
    
      render() {
       
        return (
            <header className="Searchbar">
          <form className='SearchForm' onSubmit={this.props.handleSubmit}
         >
            <label >
            <input className='SearchForm-input'
       
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
            </label>
            <label>
            <button className='SearchForm-button' type="submit">Search</button>
            </label>
         
        
            
          </form>
          </header>
        );
      }
    }
  