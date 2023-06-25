import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
const drawerWidth = 240;

const Navbar = (props ) => {
  const{window} = props; 
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MovieManagement App
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem key='Home' disablePadding>
          <ListItemButton  sx={{ textAlign: 'center' }}>
                      
                      <Link to={'/'} style={{textDecoration:'none',color:'black'}}><ListItemText primary='Home' /></Link>
                    </ListItemButton>
        </ListItem>
        <ListItem key='AddMovie' disablePadding>
          <ListItemButton  sx={{ textAlign: 'center' }}>
                      
                      <Link to={'/addmovie'} style={{textDecoration:'none',color:'black'}}><ListItemText primary='AddMovie' /></Link>
                    </ListItemButton>
        </ListItem>
        <ListItem key='AboutUs' disablePadding>
          <ListItemButton  sx={{ textAlign: 'center' }}>
                      
                      <Link to={'/aboutus'} style={{textDecoration:'none',color:'black'}}><ListItemText primary='AboutUs' /></Link>
                    </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
     {/* <Grid>
      <Grid item xs={6} sm={6} md={12}>
      <AppBar>
            <Toolbar>
                <Typography variant='h5'>
Movie Management App
                </Typography>
                <div className='nav'> <Button ><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
                <Button><Link to={'/addmovie'} style={{textDecoration:'none',color:'white'}}>Add Movie</Link></Button>
                <Button><Link to={'/aboutus'} style={{textDecoration:'none',color:'white'}}>About us</Link></Button></div>
               
            </Toolbar>
        </AppBar>
      </Grid>
     </Grid> */}
     
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
          >
           MovieManagement App
          </Typography>
          <Box sx={{flexGrow:2,display: { xs: 'none', sm: 'block' }}}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
              <div  className='nav'  style={{flexDirection:'row',justifyContent:'center'}}> <Button ><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
                <Button><Link to={'/addmovie'} style={{textDecoration:'none',color:'white'}}>Add Movie</Link></Button>
                <Button><Link to={'/aboutus'} style={{textDecoration:'none',color:'white'}}>About us</Link></Button></div>

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
      
    </div>
  )
}

export default Navbar 