// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card } from "semantic-ui-react";
// import { Button } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import OccasionForm from './OccasionForm'
// import Counter from "./Counter";
// import styled from 'styled-components'


// const Occasions = (props) => {
//   const [occasions, setOccasions] = useState([]);

//   useEffect(() => {
//     axios
//       .get("api/occasions")
//       .then((res) => {
//         console.log(res);
//         setOccasions(res.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);

//   const addOccasion = (occObj) => {
//     console.log(occObj);
//     setOccasions([occObj, ...occasions]);
//   };

//   const deleteOccasion = (id) => {
//     axios.delete(`/api/occasions/${id}`).then((res) => {
//       setOccasions(occasions.filter((occasion) => occasion.id !== id));
//     });
//   };

//   const renderOccasions = () => {
//     if (occasions.length <= 0) return <h2>No occasion</h2>;
//     return occasions.map((occasion) => (
//       <div>
//         <div key={`occasion-${occasion.id}`} style={styles.container}>
          
//           <HeaderText style={styles.statHeader}>{occasion.name}</HeaderText>
//             <BodyText style={styles.statValue}>{occasion.description}</BodyText>
//             <br/>
//             <BodyText style={styles.statValue}>Time: {occasion.time}</BodyText>
//             <br/>
         
//           <div style={styles.button}>
//             <Button color = 'blue'as={Link} to={`/occasions/${occasion.id}`}>
//               View
//             </Button>
//             <Button color = 'red'onClick={() => deleteOccasion(occasion.id)} >
//               Delete
//             </Button>
//             <Counter />
//           </div>
//         </div>
//         <div>
//         </div>
//       </div>
//     ));
//   };
  

//   return (
//     <div>
//       <Card.Group>{renderOccasions()}</Card.Group>
//       <br/>
//       <br/>
//     </div>
//   );
// };



// const HeaderText = styled.h1`
//   color: black !important;
//   text-align: center;  
//   padding-top: 3%;
//   font-family: arvo;
//   font-size: 2rem;
//   text-shadow: 2px 2px #dce0e0;
//   `;

// const BodyText = styled.p `
// color: black;
// text-align: center;
// font-family: lato;
// font-size: 1em;
// `;


// const styles = {
//   container: {
//     border: `3px solid`,
//      width: "300px",
//      height: "300px"
//   },
//   statsContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//   },
//   button: {
//   display: 'flex',
//   padding: '0',
//   margin: '0',
//   justifyContent: "space-around",
    
//   },
//   statContainer: {},
// };


// export default Occasions;





import React, { useState, useEffect } from "react"
import axios from "axios"
import OccasionForm from "./OccasionForm"
import Occasion from "./Occasion"
import { Link } from "react-router-dom"
import { Button, Card } from "semantic-ui-react"
import OccasionView from "./OccasionView"

export default function Boards() {
  const [occasions, setOccasions] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    axios.get("/api/occasions")
      .then(res => {
      setOccasions(res.data)
      })
      .catch((e) => {
      console.log(e)
    })
  }, [])

  function addOccasion(occasion) {
    setOccasions([occasion, ...occasions])
  }
 
  function removeOccasion(id) {
    axios.delete(`/api/occasions/${id}`)
      .then((res) => {
      setOccasions(occasions.filter(occasion => occasion.id !== id))
    })
  }

  // function renderBoards() {
  //   return boards.map(b => (
  //     <div>
  //       <h1>{b.name}</h1>
  //       <p>{b.description}</p>
  //       <button onClick={() => removeBoard(b.id)}>Delete</button>
  //     </div>
  //   ))
  // }

  //delete is doesnt work***********************************************
  function renderOccasions() {
    return occasions.map(occasion => (
      <>
        <Occasion
          key={occasion.id}
          {...occasion}
          editOccasion={editOccasion}
          removeOccasion={removeOccasion}
        />
       </>
    ))
  }

  const editOccasion = (id, occasion) => { //we pass the id from our state, add board from form
    axios.put(`/api/occasion/${id}`, occasion)
      .then(res => {
        const updateOccasion = occasions.map(occasion => {
          if (occasion.id === id) //if the board.id matches the id that we clicked on then.. 
            return res.data //return the data that was updated
          return occasion //else just return the board as is
        })
        setOccasions(updateOccasion) //we then push the updated board to our state
      })
  }
  

  return (
    <>
      {showForm && <OccasionForm addOccasion={addOccasion} toggleForm={setShowForm} />}
      <br/>
      
      <br/>


      <Card.Group>{renderOccasions()}</Card.Group>
    </>
  )
}