import * as React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

interface Props {
    loggedIn: boolean;
    handleLogin: () => void;
    handleLogout: () => void; 
    handleSignup: () => void;
}

const Bar: React.FC<Props> = ({ loggedIn, handleLogin, handleLogout, handleSignup }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='primary' position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Skribe
                    </Typography>
                    {loggedIn ? 
                    
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                    
                    : 
                    
                    <ButtonGroup>
                        <Button color="inherit" onClick={handleSignup}>Signup</Button>
                        <Button color="inherit" onClick={handleLogin}>Login</Button>
                    </ButtonGroup>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Bar; 