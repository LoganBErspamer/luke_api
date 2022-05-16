import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const People = () => {

    const {id}=useParams()
    const [person, setPerson]=useState()
    const navigate=useNavigate()

    //will only trigger once, so if person tries to return another person it wont change
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response.data)
            setPerson(response.data)
        })
        .catch(err=>{console.log(err)
        navigate("/error")})
    },[id])//add the bracket and id in this line so when id changes the page refreash?

  return (
    <div>
      {
        person?
        <div>
          <h1>{person.name}</h1>
          <h3>Height: {person.height}</h3>
          <h3>Mass:{person.mass}</h3>
          <h3>Hair Color:{person.hair_color}</h3>
          <h3>Skin Color: {person.skin_color}</h3>
        </div>:"Loading"
      }
    </div>
  )
}

export default People