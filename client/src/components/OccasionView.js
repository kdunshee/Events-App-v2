import React, { useState, useEffect } from "react"
import axios from "axios"
import Occasions from "./Occasions"

export default function OccasionView(props) {
  const [occasions, setOccasion] = useState({})

  useEffect(() => {
    axios.get(`/api/occasions/${props.match.params.id}`)
      .then(res => {
      setOccasion(res.data)
      })
      .catch((e) => {
      console.log(e)
    })
  }, [])

  return(
    <div>
      {/* <h1>{board.name}</h1>
        <p>{board.description}</p> */}
        {/* <button onClick={() => props.removeBoard(props.id)}>Delete</button>
        <button onClick={() => props.editBoard(props.id)}>Edit</button> */}
      <Occasions boardId={props.match.params.id}/>
    </div>
    
  )
}