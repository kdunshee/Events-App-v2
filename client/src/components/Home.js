import React from "react";
import { Header } from "semantic-ui-react";
import Occasions from "./Occasions";
import styled from 'styled-components'


const Home = () => {
    
    return (
        <div>
        <HeaderText>Events In Your Area!</HeaderText>
        <hr />
        <br />
        <br/>
      <Occasions />
      <br/>
      <br />
    </div>
  );
};
export default Home;

const HeaderText = styled.h1`
  color: blue !important;
  text-align: center;  
  padding-top: 5%;
  font-family: arvo;
  font-size: 5em;
  text-shadow: 2px 2px #dce0e0;
  `;