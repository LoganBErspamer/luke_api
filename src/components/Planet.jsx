import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {

    const {id}=useParams()
    const [planet, setPlanet]=useState()
    const navigate = useNavigate()

    useEffect(()=>{
      axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response=>{
        console.log(response.data)
        setPlanet(response.data)
      })
      .catch(err=>{console.log(err)
      navigate("/error")})
    },[id])

  return (
    <div>
      {
        planet?
        <div>
          <h1>{planet.name}</h1>
          <h3>Climate: {planet.climate}</h3>
          <h3>Terrain: {planet.terrain}</h3>
          <h3>Surface Water: {planet.surface_water}</h3>
          <h3>population: {planet.population}</h3>
        </div>:"Loading"
      }
    </div>
  )
}

export default Planet