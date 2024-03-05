import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarItems';
import { useNavigate } from 'react-router';
import { navbarStyles } from './styles';

function Navbar () {

    const navigate = useNavigate();
    return (
        <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor='left'
      >
        <Toolbar />
        <Box sx={{ 
            overflow: 'auto', }}>
          <List>
            {mainNavbarItems.map((item, index) => (
              <ListItem key={item.id} onClick={() => navigate(item.route)}>
                <ListItemButton>
                  <ListItemIcon sx={navbarStyles.icons}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    )
}

export default Navbar;