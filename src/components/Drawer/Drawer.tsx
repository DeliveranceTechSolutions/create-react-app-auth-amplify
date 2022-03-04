import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Amplify from 'aws-amplify';
import aws_exports from '../../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
Amplify.configure(aws_exports);

const useStyles = makeStyles({
  paper: {
    background: 'white',
  }
});

function MainDrawer(props: any) {
  const classes = useStyles();
  const [orientation, setOrientation] = React.useState(true);

  const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOrientation(!orientation);
  };

  const list = (anchor: any) => (
    <Box
      sx={{
        overflow: 'none',
      }}
    >
      <Box
        sx={{
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
          height: "100vh",
          bgcolor: 'lightgray !important',
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Home', 'About_Us', 'Contact_Us', 'Give'].map((text, index) => (
            <Link style={{ color: '#1d1e20', textDecoration: "none"}} to={`/${text.toLowerCase()}`} >
              <ListItem button key={index}>
                <ListItemText primary={
                    text.split('_').map((word: any) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
                  } />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['Login', 'Referral_Code'].map((text, index) => (
            <Link style={{ color: '#1d1e20', textDecoration: "none"}} to={`/${text.toLowerCase()}`} >
              <ListItem button key={index}>
                <ListItemText primary={
                    text.split('_').map((word: any) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
                } />
              </ListItem>
            </Link>
          ))}
          
            <AmplifySignOut />
        </List>
      </Box>
    </Box>

  );

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      bgcolor: 'black',
      width: '100%',
      height: '3.5em',
      display: "flex",
      zIndex: "1000",
    }}>
      {['|||'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{
              transform: 'rotate(90deg)',
              color: "whitesmoke",
              fontSize: "1.8em",
            }}>{anchor}</Button>
          <Drawer
            classes={{ paper: classes.paper }}
            anchor={'left'}
            open={!orientation}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default withAuthenticator(MainDrawer);