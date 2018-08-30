import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "~/components/TodoList";
import Counter from "~/components/TodoList/Counter";

import { withStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import NewAppBar from "~/components/Header/NewAppBar";
import SideBar from "~/components/Bar/SideBar";
import Forms from "~/components/Main/Forms";

const styles = () => ({
  root: {
    zIndex: 999,
    position: "absolute"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <div className={classes.background}>
          <NewAppBar />
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Grid container>
                <SideBar />
                <Grid item xs={9}>
                  <Forms />
                  <TodoList />
                  <Counter />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
