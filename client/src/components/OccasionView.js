

import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class OccasionView extends React.Component {
  state = { occasion: {}, };

  componentDidMount() {
    axios.get(`/api/occasions/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ occasion: res.data, });
      })
  }

  render() {
    const { name, description, time, additional_info, } = this.state.occasion;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h3">{ description }</Header>
          <Header as="h5" color="grey">{ time }</Header>
          <p>{ additional_info }</p>
        </Segment>
        <br />
        <br />
        <Button 
          color="blue" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default OccasionView;

