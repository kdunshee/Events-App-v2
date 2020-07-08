import React from 'react';
import OccasionForm from './OccasionForm'
import axios from 'axios'

const Create = () => {

  function createOccasion  (occasion) {
    axios.post("api/occasions",{occasion: occasion})
  .then(
  window.location.href = ("/")
  )
  }


  
return (
  <div>

    <OccasionForm  createOccasion = {createOccasion}/>
  </div>
)
}
export default Create;
