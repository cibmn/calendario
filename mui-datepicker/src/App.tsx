import React from "react";
import "./App.css";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


const DrawerHeader = styled('div')(({ theme }) => ({  
  display:'flex',
  alignItem:'center',
  padding:'theme.spacing(0,1)',
  ...theme.mixins.toolbar,
  justifyContent:'flex-end',
}));

function App() {

  const [open, setOpen]= React.useState(false);
  const drawerOpen = ()=>{
    setOpen(true);
  };

  const drawerClose =()=>{
    setOpen(false);
  };

  return (
    <Box style={{ padding: "20px" }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={drawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            Gokulam Yoga
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open}>
        <DrawerHeader>
        <IconButton onClick={drawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          </DrawerHeader>
        <Divider /> 
        <List>
          {["Home", "Abut", "Us", "Contact", "Support"].map((text)=> (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemText primary={text}></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <Divider/>
      </Drawer>

      <Typography variant="h5" style={{ padding: "10px", marginTop: "60px" }}>
        Calendario
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Elija el día"></DatePicker>
      </LocalizationProvider>
    </Box>
  );
}

export default App;
