import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const SideMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <List>
          <Link to="/" className={classes.link} onClick={toggleDrawer}>
            <ListItem button>
              <ListItemText primary="Inicio" />
            </ListItem>
          </Link>
          <Link to="/contacto" className={classes.link} onClick={toggleDrawer}>
            <ListItem button>
              <ListItemText primary="Contáctanos" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
