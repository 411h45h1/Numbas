import React, { Component } from "react";
import {
  Grid,
  Rating,
  Segment,
  Header,
  Icon,
  Popup,
  Button,
  Label,
} from "semantic-ui-react";

import { SlangChart } from "../../components/modules";

class Body extends Component {
  state = {};

  render() {
    return (
      <Grid.Column width={14}>
        <Segment basic id="NoDrag">
          <Segment>
            <SlangChart />
          </Segment>
        </Segment>
      </Grid.Column>
    );
  }
}

export default Body;
