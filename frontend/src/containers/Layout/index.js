import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar
});

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <NavBar />
        {children}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
