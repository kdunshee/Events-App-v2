

import React, { useState, useEffect } from "react"
import { Form, Button } from "semantic-ui-react"
import axios from "axios"

const OccasionForm = (props) => {
  const [name, setName] = useState('')
  const [des, setDes] = useState('')
  const [time, setTime] = useState('')
  const [additional_info, setAddInfo] = useState('')

  const occasion = { name: name, description: des, time: time, additional_info: additional_info}
  
  useEffect(() => {
    if (props.id) {
      setName(props.name)
      setDes(props.description)
      setTime(props.time)
      setAddInfo(props.additional_info)
    }
  },[])

  function handleSubmit(e) {
    e.preventDefault()
    if (props.editBoard) {
      props.editBoard(props.id, occasion)
      props.toggleEdit()
    } else {  
       axios.post("/api/occasions", occasion)
      .then((res) => {
        props.addOccasion(res.data)
         props.toggleForm();
      })
      .catch((e) => {
        console.log(e)
      })
      setName('')
      setDes('')
      setTime('')
      setAddInfo('')
      
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
      />

      <Form.Input
          label="Description"
          name="description"
          placeholder="Description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          required
      />
       <Form.Input
              label="Time"
              name="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              />
              <Form.Input
              label="Additional Information"
              name="additional_info"
              placeholder="Additional Information"
              value={additional_info}
              onChange={(e) => setAddInfo(e.target.value)}
              />
      <Button>Create</Button>
      </Form>
  )  
}

export default OccasionForm;