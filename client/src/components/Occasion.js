import React, { useState, } from "react";
import { Link, } from "react-router-dom"
import { Button, Card } from "semantic-ui-react";
import OccasionForm from "./OccasionForm";
import OccasionView from "./OccasionView"
import styled from 'styled-components'

const Occasion = (props) => {
  const [ editing, setEditing] = useState(false)

  return ( 
    <>
   
    <div>
      <div style={styles.container}>
      <HeaderText style={styles.statHeader}>{props.name}</HeaderText>
      <BodyText style={styles.statValue}>Description: {props.description}</BodyText>
      <BodyText style={styles.statValue}>Time: {props.time}</BodyText>
      <BodyText style={styles.statValue}>Additional Information: {props.additional_info}</BodyText>
      
      <br/>
      
      <div style={styles.button}>
      <Button color = 'blue' onClick={() => setEditing(!editing)}>{editing ? "Close Edit" : "Edit"}</Button>
      <Button color = 'red' onClick={() => props.removeOccasion(props.id)}>Delete</Button> 
      <Link to={`/OccasionView/${props.id}`}
          key={props.id}
          {...props}>
        <Button>View</Button>
        </Link>
        </div>
        </div>
        </div>
       

        {/*if editing is true then display form else null  */}
      {editing ? <OccasionForm toggleEdit={setEditing} {...props}/> : null } 
      
    </>
  )
};

const HeaderText = styled.h1`
  color: black !important;
  text-align: center;  
  padding-top: 3%;
  font-family: arvo;
  font-size: 2rem;
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

export default Occasion;