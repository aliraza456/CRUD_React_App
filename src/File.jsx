import React, { useEffect, useState } from 'react'
import CardList from './CardList';
import './App.css'

const File = () => {



const [searchField, setSearchField] = useState("");
const [monsters, setMonsters] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) =>{setMonsters(users)})
}, []);

const onSearchChange =(event) => {
  const searchFieldString = event.target.value.toLowerCase();
  setSearchField(searchFieldString)
}
const filteredMonsters = monsters.filter((monster) =>{
  return monster.name.toLowerCase().includes(searchField);
})

  return (
    <div className='container'>
    <h1 className="title">Pokemon Card</h1> {/* Note the typo in "Pokemon" */}
      <input 
        className="search-input"
        placeholder="Search Pokemon"
        onChange={onSearchChange}
        type="search"
      />
      <CardList  monsters={filteredMonsters} />
    </div>
  )
}

export default File
