import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EnhancedTableHead from './EnhancedTableHead';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import TextField from '@material-ui/core/TextField';
import SimpleTabs from './SimpleTabs';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 750,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          
<Typography variant="title" color="inherit" noWrap>
            Virtual Office
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
<div> <SimpleTabs/> </div>


        <div>

        <TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />

        </div>
        <br/>

        
        <div><EnhancedTableHead /></div>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
