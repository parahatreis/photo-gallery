import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';

const Search = ({onSearch}) => {
   const [text , setText] = useState('');

   

   return (
      <div className="input-block">
         <div className="search-block">
            <div className="search-icon" >
            <SearchIcon />
            </div>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  onSearch(text)
               }}
            >
               <input
                  onChange={(e) => {
                     setText(e.target.value)
                  }}
                  value={text} 
                  type= "text"
                  placeholder="Search here"
                  className="search-input"
               />
            </form>
         </div>
      </div>
   )
}

export default Search
