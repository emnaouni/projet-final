import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CategoryIcon from "@material-ui/icons/Category";
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import './Admin.css';
import Medecin from "../medecin/Medecin"
import ListMedicaments from './ListMedicaments'
import ListMaladies from './ListMaladies'
import ListMedecin from './ListMedecin'
import ListPatient from './ListPatient'
import Button from '@material-ui/core/Button'
import {logout , loadUser} from '../../actions/authActions'
import { compose } from "redux"
import { connect } from "react-redux"







const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class Admin extends React.Component {
    state = {
        open: false,
    };
    componentDidMount(){
        if(this.props.auth.token){
            this.props.loadUser()
        }
            
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;


        const MenuItems = [
            {
                menuName: "Tableau de bord",
                linkItem: "/dashbord"
            },
            {
                menuName: "Médicaments",
                linkItem: "/Admin/ListMedicament"
            },
            {
                menuName: "Maladie",
                linkItem: "/Admin/ListMaladie"
            },
            {
                menuName: "Medecin",
                linkItem: "/Admin/ListMedecin"
            },
            {
                menuName: "Patient",
                linkItem: "/Admin/ListPatient"
            },
           
        ];
        return (
            <BrowserRouter>
            <div>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: this.state.open,
                        })}
                    >

                      <div className="all"> 
                        <div>
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, {
                                    [classes.hide]: this.state.open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                     
                        </Toolbar>
                        </div> 
                        <div className="logout">
                        <Toolbar disableGutters={!this.state.open}>
                        <Button variant="outlined"  onClick={()=> {
                            this.props.logout()
                            this.props.history.push('/Admin/Login')
                            }} className={classes.button}>
                         Se déconnecter

                       </Button>
                       </Toolbar>
                       </div>
                       </div> 
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={classNames(classes.drawer, {
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        })}
                        classes={{
                            paper: classNames({
                                [classes.drawerOpen]: this.state.open,
                                [classes.drawerClose]: !this.state.open,
                            }),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List className="List-Items">
                            {MenuItems.map((el, index) => (
                                <Link key={index} to={el.linkItem}>
                                    <ListItem button key={el.menuName}>
                                        <ListItemIcon>{<InboxIcon/>}</ListItemIcon>
                                        <ListItemText primary={el.menuName} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Switch>
                            <Route exact path="/Admin/ListMedicament" component={ListMedicaments} />
                            <Route exact path="/Admin/ListMaladie" component={ListMaladies} />
                            <Route exact path="/Admin/ListMedecin" component={ListMedecin} />
                            <Route exact path="/Admin/ListPatient" component={ListPatient} />



                        </Switch>
                    </main>
                </div>
                </div>
            </BrowserRouter>
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}


export default  connect(mapStateToProps,{logout , loadUser})(withStyles(styles, {withTheme : true })(Admin));

