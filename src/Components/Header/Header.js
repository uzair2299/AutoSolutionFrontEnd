import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AUTOSOLUTIONROUTING from '../../Routing/AutoSolutionRouting';
import {
    CssBaseline,
    AppBar,
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListSubheader,
    Typography,
    Divider,
    IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SendIcon from '@material-ui/icons/Send';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DashboardIcon from '@material-ui/icons/Dashboard';

import AUTOSOLUTIONPATH from '../../Routing/AutoSolutionPath'
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';
import img from '../../Assets/bg/300.jpg'


const drawerWidth = 240;
const backgroundColor = '#f5f5f5'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    nested: {
        paddingLeft: theme.spacing(4),
        fontSize:10
    },
    appBar: {
        backgroundImage:`url(${img})`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f5f5f5",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        backgroundColor: "#f5f5f5",
    },
    content: {
        flexGrow: 1,
        //padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }, 
     link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
      }

}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openNested, setOpenNested] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpenNested(!openNested);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {"Auto Solution"}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>  <Link to={AUTOSOLUTIONPATH.DASHBOARD} className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary="DashBoard" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {"Nested List Items"}
                        </ListSubheader>
                    }
                >

                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <DriveEtaIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Auto Vehicle" />
                        {openNested ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openNested} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <Link to={AUTOSOLUTIONPATH.AUTOMANUFACTURER} className={classes.link}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FiberManualRecordIcon />
                                </ListItemIcon>
                                <ListItemText primary="Auto Manufacturer" />
                            </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <AUTOSOLUTIONROUTING />
            </main>
        </div>
    );
}
