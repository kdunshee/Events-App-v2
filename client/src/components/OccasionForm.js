import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import Axios from 'axios';

class OccasionForm extends React.Component {
  defaultValues = { name: "", description: "", time: "", additional_info: "" };
  state = { ...this.defaultValues, };



  handleSubmit = (e) => {
    e.preventDefault();
    const occasion = { ...this.state, };
    if (this.props.createOccasion){
      this.props.createOccasion(occasion)
    }
    else  
      Axios.post('api/occasions', {occasion: occasion}).then((res) => {
          console.log(res)
          this.props.add(res.data)
    })
    this.setState({ ...this.defaultValues, });
  }



  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }


  render() {
    const { name, description, date, additional_info } = this.state;
    return (
      <div>
       

        <Header as="h1">Enter New Event</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
              />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
              />
              <Form.Input
              label="Time"
              name="time"
              placeholder="Time"
              value={date}
              onChange={this.handleChange}
              />
              <Form.Input
              label="Additional Information"
              name="additional_info"
              placeholder="Additional Information"
              value={additional_info}
              onChange={this.handleChange}
              />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
              
      </div>
    )
  }
}

export default OccasionForm;