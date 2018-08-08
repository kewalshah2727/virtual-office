import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 3 * 1 }}>
      {props.children}
    </Typography>
  );
}

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} style={{fontWeight: 'bold'}}>
            <Tab label="All" />
            <Tab label="OnGoing" />
            <Tab label="Assigned" href="#" />
            <Tab label="Set By Me" />
            <Tab label="Following" />
            <Tab label="Projects" />

          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer></TabContainer>}
        {value === 1 && <TabContainer></TabContainer>}
        {value === 2 && <TabContainer></TabContainer>}
        {value === 3 && <TabContainer></TabContainer>}
        {value === 4 && <TabContainer></TabContainer>}
        {value === 5 && <TabContainer></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
