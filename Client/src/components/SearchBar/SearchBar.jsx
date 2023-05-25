import { useState } from "react";
import "./SearchBar"

   const SearchBar =({onSearch}) =>{
   const [id,setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div class="sea">
         <input class="inpu" type='search' id='search' value={id} onChange={handleChange}/>
         <button  class="bu" onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}



export default SearchBar; 
