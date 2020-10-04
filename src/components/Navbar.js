import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../avatar.png";

//CSS Style
const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
      width:250,
      background:"#990000",
      height: "100%"
  },
  avatar: {
      display: "block",
      margin: "0.5rem auto",
      width: theme.spacing(13),
      height: theme.spacing(13)
  },
  ListItem:{
      color: "tan"
  } 
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    },
] 

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    }) 

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles();

    const sideList = slider => (
        <Box
           className={classes.menuSliderContainer} 
           component="div"
           onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt="Kaleeswaran"/>
        <Divider />
        <List>
            {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.ListItem}>
                    {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.ListItem} primary={lsItem.listText} />
            </ListItem>

            ))}           
        </List>
    </Box>

    )
    return (
        <>
       
        <Box component="nav">
            <AppBar position="static" style={{ background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)}>
                        <ArrowBack style={{color: "tomato"}} />
                    </IconButton> 
                    <Typography variant="h5" style={{color: "tan"}}>Portfolio</Typography>   
                    <MobilRightMenuSlider
                     anchor="left"
                     open={state.left}
                     onClose={toggleSlider("left", false)}
                    
                    >
                        {sideList("left")}
                    </MobilRightMenuSlider>             
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar;
