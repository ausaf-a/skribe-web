import React, { useState, useEffect } from 'react';
import { Typography, CssBaseline, Snackbar } from '@material-ui/core';
import Bar from './Bar';
import Alert from '@material-ui/lab/Alert'
import { LoginDialog, SignUpDialog } from './Dialogs';
import { auth } from '../firebase'



const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [signupDialog, setSignupDialog] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState('');

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
        setSignupDialog(false);
      }
    })

    return () => unsubscribe();
  });

  const signUp = (name: string, email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        response.user?.updateProfile({
          displayName: name, 
        })
      })
      .catch(error => {
        setError(error.message);
        setSnackbar(true);
      });
  }

  // Sign in using email and password
  const signIn = (email: string, password: string) => {
    console.log('Signing in with ' + email + ':' + password);

    auth.signInWithEmailAndPassword(email, password)
      .then()
      .catch(error => {
        console.log(error);
        setError(error.message);
        setSnackbar(true);
      });
  };

  // Sign out
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

        <Typography variant='h4' align='center'>
          {isLoggedIn ? 'Welcome, ' + auth.currentUser?.displayName : 'Not Signed in'}
        </Typography>

        <LoginDialog
          open={loginDialog}
          handleClose={() => setLoginDialog(false)}
          handleSubmit={(email, password) => signIn(email, password)}
        />
        <SignUpDialog
          open={signupDialog}
          handleClose={() => setSignupDialog(false)}
          handleSubmit={(name, email, password) => signUp(name, email, password)}
        />
        <Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackbarClose}>
          <Alert severity={error ? "error" : "success"} >
            {error || "Logged in successfully!"}
          </Alert>
        </Snackbar>
      </CssBaseline>
    </>
  )

}

export default App;
