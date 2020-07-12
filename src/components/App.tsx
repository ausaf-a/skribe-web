import React, { useState, useEffect } from 'react';
import { Typography, CssBaseline, Snackbar } from '@material-ui/core';
import Bar from './Bar';
import LoginDialog from './Dialogs/Login';
import Alert from '@material-ui/lab/Alert'

import { auth } from '../firebase'



const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [signupDialog, setSignupDialog] = useState(false);
  const [snackbar, setSnackbar] = useState(false);


  const handleSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
    setSnackbar(false); 
  }

  // Update the authentication state when it changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("Effect: the auth state has changed to:" + isLoggedIn);
      if (user == null) {
        console.log('Effect: user is null')
        setLoggedIn(false);
      } else {
        console.log('Effect: signed in')
        setLoggedIn(true);
        setLoginDialog(false);
      }
    })

    return () => unsubscribe();
  });


  const signIn = (email: string, password: string) => {
    console.log('Signing in with ' + email + ':' + password);
    setSnackbar(true);
    auth.signInWithEmailAndPassword(email, password)
  };

  /** Sign out of the app */
  const signOut = () => {
    console.log('Signing out');
    auth.signOut();
  };

  return (
    <>
      <CssBaseline>
        <Bar
          loggedIn={isLoggedIn}
          handleLogout={() => signOut()}
          handleLogin={() => setLoginDialog(true)}
          handleSignup={() => setSignupDialog(true)}
        />

        <Typography variant="h2">
          {isLoggedIn ? 'Welcome' : 'Not Signed in'}
        </Typography>

        <LoginDialog
          open={loginDialog}
          handleClose={() => setLoginDialog(false)}
          handleLogin={(email, password) => signIn(email, password)}
        />

        <Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackbarClose}>
          <Alert>Logging you in!</Alert>
        </Snackbar>
      </CssBaseline>
    </>
  )

}

export default App;