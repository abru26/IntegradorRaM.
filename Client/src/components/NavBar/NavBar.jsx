import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";



const NavBar = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  }

  const ramdomCharacter = useDispatch();
  const dispatch = useDispatch();
  const getRandomCharacter = useDispatch();
  const addCharacter = "";

  const handleAddRandomCharacter = () => {
    const randomCharacter = getRandomCharacter();
    dispatch(addCharacter(randomCharacter));
  }


    return (
      <div className= {style.navigation}>
        <SearchBar onSearch={onSearch}/>
      <button className="hamburger" >
        
        <NavLink to="/home">
          <button>HOME</button>
          </NavLink>
        <NavLink to="/about">
          <button>ABOUT</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>FAVORITES</button>
          </NavLink>
        <div>
        <button onClick={handleLogOut}>LOG OUT</button>
      </div>
      <div>
        <button onClick={handleAddRandomCharacter}>Agregar personaje aleatorio</button>
      </div>
      </button>
      </div>

      
      // {/* <div> */}
      //       {/* <li {randomCharacter}> </li>
      //           <button onClick={addCharacter}>Add Character</button/> */}
      // {/* </div> */}

    );
}



export default NavBar;



