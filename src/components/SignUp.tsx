import * as React from 'react'; 
import {TextField, Paper} from '@material-ui/core';
import { Formik, Form } from 'formik'; 

interface Props {
    onSubmit: () => void; 
}

export const SignUp: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Paper>
            <TextField />
            <TextField/>
            <TextField/>
            <TextField/>
        </Paper>
    ); 
}
