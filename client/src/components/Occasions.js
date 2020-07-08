import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import OccasionForm from './OccasionForm'
import Counter from "./Counter";
import styled from 'styled-components'


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
        <div key={`occasion-${occasion.id}`} style={styles.container}>
          
          <HeaderText style={styles.statHeader}>{occasion.name}</HeaderText>
            <BodyText style={styles.statValue}>{occasion.description}</BodyText>
            <br/>
            <BodyText style={styles.statValue}>Time: {occasion.time}</BodyText>
            <br/>
         
          <div style={styles.button}>
            <Button color = 'blue'as={Link} to={`/occasions/${occasion.id}`}>
              View
            </Button>
            <Button color = 'red'onClick={() => deleteOccasion(occasion.id)} >
              Delete
            </Button>
            <Counter />
          </div>
        </div>
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
    </div>
  );
};



const HeaderText = styled.h1`
  color: black !important;
  text-align: center;  
  padding-top: 3%;
  font-family: arvo;
  font-size: 2em;
  text-shadow: 2px 2px #dce0e0;
  `;

const BodyText = styled.p `
color: black;
text-align: center;
font-family: lato;
font-size: 1em;
`;


const styles = {
  container: {
    border: `3px solid`,
     width: "300px",
     height: "300px"
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
  display: 'flex',
  padding: '0',
  margin: '0',
  justifyContent: "space-around",
    
  },
  statContainer: {},
};


export default Occasions;
