import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
    open: boolean
    handleSubmit: (name: string, email: string, password: string) => void;
    handleClose: () => void;
}

const SignUp: React.FC<Props> = ({ open, handleClose, handleSubmit }) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fname"
                        label="First Name"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        fullWidth
                    />
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lname"
                        label="Last Name"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    
                    <Button onClick={() => handleSubmit(`${firstName} ${lastName}`, email, password)} color="primary">
                        Create Account
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default SignUp; 