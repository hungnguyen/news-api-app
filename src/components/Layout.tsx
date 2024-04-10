import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LeftMenu from './LeftMenu';
import { useNavigate } from 'react-router-dom';
import { Favorite, Home } from '@mui/icons-material';
import SearchBox from './SearchBox';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

export default function Layout({children}: {children: React.ReactNode}) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            News Feed
          </Typography>
         
          <div className="grow" />
          
          <IconButton color="inherit" onClick={()=>navigate("/")}>
              <Home />
            </IconButton>
          <IconButton color="inherit" onClick={()=>navigate("/my-favorites")}>
            <Favorite />
          </IconButton>
          <SearchBox />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <LeftMenu/>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
