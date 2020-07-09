import React, { useState, useEffect } from "react";
import axios from "axios";
import OccasionForm from "./OccasionForm";
import Occasion from "./Occasion";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import OccasionView from "./OccasionView";

export default function Occasions() {
  const [occasions, setOccasions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("/api/occasions")
      .then((res) => {
        setOccasions(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function addOccasion(occasion) {
    axios.post("api/occasions", { occasion: occasion }).then((res) => {
      setOccasions([res.data, ...occasions]);
    });
  }

  function removeOccasion(id) {
    axios.delete(`/api/occasions/${id}`).then((res) => {
      setOccasions(occasions.filter((occasion) => occasion.id !== id));
    });
  }

  function renderOccasions() {
    return occasions.map((occasion) => (
      <>
        <Occasion
          key={occasion.id}
          {...occasion}
          editOccasion={editOccasion}
          removeOccasion={removeOccasion}
        />
      </>
    ));
  }

  const editOccasion = (id, occasion) => {
    //we pass the id from our state, add board from form
    axios.put(`/api/occasion/${id}`, occasion).then((res) => {
      const updateOccasion = occasions.map((occasion) => {
        if (occasion.id === id)
          //if the board.id matches the id that we clicked on then..
          return res.data; //return the data that was updated
        return occasion; //else just return the board as is
      });
      setOccasions(updateOccasion); //we then push the updated board to our state
    });
  };

  return (
    <>
      {showForm && (
        <OccasionForm addOccasion={addOccasion} toggleForm={setShowForm} />
      )}
      <br />

      <br />

      <Card.Group>{renderOccasions()}</Card.Group>
    </>
  );
}
