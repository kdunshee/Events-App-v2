import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import OccasionForm from './OccasionForm'
import Counter from "./Counter";

const Occasions = (props) => {
  const [occasions, setOccasions] = useState([]);

  useEffect(() => {
    axios
      .get("api/occasions")
      .then((res) => {
        console.log(res);
        setOccasions(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const addOccasion = (occObj) => {
    console.log(occObj);
    setOccasions([occObj, ...occasions]);
  };

  const deleteOccasion = (id) => {
    axios.delete(`/api/occasions/${id}`).then((res) => {
      setOccasions(occasions.filter((occasion) => occasion.id !== id));
    });
  };

  const renderOccasions = () => {
    if (occasions.length <= 0) return <h2>No occasion</h2>;
    return occasions.map((occasion) => (
      <div>
        <Card color = "blue card" key={`occasion-${occasion.id}`}>
          <Card.Content>
            <Card.Header>{occasion.name}</Card.Header>
            <Card.Description>{occasion.description}</Card.Description>
            <Card.Description>Time: {occasion.time}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Counter />
            <Button color= "ui inverted primary button"as={Link} to={`/occasions/${occasion.id}`}>
              View
            </Button>
            <Button color="ui inverted red button" onClick={() => deleteOccasion(occasion.id)} >
              Delete
            </Button>
          </Card.Content>
        </Card>
        <div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Card.Group>{renderOccasions()}</Card.Group>
      <br/>
      <br/>
      <OccasionForm add = {addOccasion}/>
    </div>
  );
};

export default Occasions;