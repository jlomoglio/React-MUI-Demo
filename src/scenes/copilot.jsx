/** create a react login functional component using mui */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(1, 0, 1)
    }
}));

export default function Login() {


    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const { login } = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {

        e.preventDefault();

        try {
            setLoading(true);
            await login(email, password);
            history.push('/dashboard');
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField

                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={loading}
                >
                    Login
                </Button>
            </form>
        </div>
    );
}



























