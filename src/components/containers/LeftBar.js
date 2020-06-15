import React, { Component } from "react";
import { Button, Segment, Grid, Icon, Rating } from "semantic-ui-react";

class LeftBar extends Component {
  state = {};

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });
  render() {
    const { sidebarVisible, setSidebarVisible } = this.props;

    return (
      <Grid.Column width={2}>
        <Segment
          vertical
          id="NoDrag"
          inverted
          style={{
            height: "125vh",
            alignItems: "flex-start",
            justifyItems: "center",
            backgroundColor: "#3D7CB1",
          }}
        >
          <Segment
            vertical
            id="NoDrag"
            inverted
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              // marginTop: -15,
              border: "solid 5px black",
              backgroundColor: "#B6CEE2",
            }}
          >
            <Button.Group vertical>
              <Button
                compact
                id="NoDrag"
                icon="bars"
                color="black"
                style={{ fontSize: "2.5vw" }}
                onClick={() => {
                  setSidebarVisible(!sidebarVisible);
                }}
              />
              <Button
                style={{ fontSize: "2.5vw" }}
                icon="user circle"
                color="black"
                onClick={() => {
                  console.log("user");
                }}
              />
              <Button
                icon="shuffle"
                color="black"
                style={{ fontSize: "2.5vw" }}
                onClick={() => {
                  console.log("Random video");
                }}
              />
            </Button.Group>
          </Segment>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Button.Group vertical>
              <Button
                color="black"
                onClick={() => {
                  console.log("Content");
                }}
              >
                <Icon
                  name="hand point up"
                  style={{ fontSize: "2.5vw", marginRight: -4 }}
                />
              </Button>

              <Button
                icon
                color="black"
                onClick={() => {
                  console.log("add content");
                }}
              >
                <Icon.Group>
                  <Icon name="file video" style={{ fontSize: "2.5vw" }} />
                  <Icon
                    corner="top right"
                    name="add"
                    color="red"
                    style={{
                      fontSize: "1.2vw",
                      marginBottom: -3,
                      marginRight: -5,
                    }}
                  />
                </Icon.Group>
              </Button>
              <Button
                style={{ fontSize: "2.5vw" }}
                icon={
                  <Icon
                    name="hotjar"
                    // color="orange"
                  />
                }
                color="black"
                onClick={() => {
                  console.log("popular content");
                }}
              />

              <Button
                icon
                color="black"
                onClick={() => {
                  console.log("browse creators");
                }}
              >
                <Icon.Group>
                  <Icon
                    name="folder open outline"
                    style={{ fontSize: "2.5vw" }}
                  />
                  <Icon
                    corner="top right"
                    name="add"
                    color="red"
                    style={{
                      fontSize: "1.2vw",
                      marginBottom: -3,
                      marginRight: -5,
                    }}
                  />
                </Icon.Group>
              </Button>

              <Button
                style={{ fontSize: "2.5vw" }}
                icon="history"
                color="black"
                onClick={() => {
                  console.log("Random video");
                }}
              />
            </Button.Group>
          </div>
        </Segment>
      </Grid.Column>
    );
  }
}

export default LeftBar;
