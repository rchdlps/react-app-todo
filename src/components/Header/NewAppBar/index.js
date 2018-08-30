import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import {
  Typography,
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Button
} from "@material-ui/core";

const styles = () => ({
  newappbar: {
    background: "none",
    background: "#091827"
  },
  flex: {
    flexGrow: 1
  }
});

class NewAppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12}>
        <AppBar position="static" className={classes.newappbar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewAppBar);
