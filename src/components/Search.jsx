import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {


  const navigate= useNavigate();
  const [category, setCategory]=useState();
  const [id, setId]=useState();
const handleSubmit =(e)=>{
  e.preventDefault()
  navigate(`/${category}/${id}`)
  clearForm()
}

const clearForm=()=>{
  setId("")
  setCategory("")
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <select name="category" value={category} onChange={e=> setCategory(e.target.value)}>
            <option hidden>Choose Category</option>
            <option value="people">people</option>
            <option value="planets">planets</option>
        </select>
        <label>ID:</label>
        <input type="text" name="id" value={id} onChange={e=>setId(e.target.value)}/>
        <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Search