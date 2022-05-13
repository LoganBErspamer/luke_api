import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {

    const {id}=useParams()
    const [planet, setPlanet]=useState()

    useEffect(()=>{
      axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response=>{
        console.log(response.data)
        setPlanet(response.data)
      })
      .catch(err=>console.log(err))
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
        </div>:"err"
      }
    </div>
  )
}

export default Planet