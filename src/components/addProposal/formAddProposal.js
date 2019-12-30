import React from 'react'
import { Container, Grid, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, ButtonGroup, TextField } from '@material-ui/core'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import colors from "../../stylesConst/colors"


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    papaperItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: "4px",
        color: colors.white,
        backgroundColor: colors.black,
        '&:hover': {
            backgroundColor: colors.spaceGray,
        }
    },
}));

export default function FormAddProposal(props) {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add Proposal
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <div className={classes.papaperItem}>
                                <RadioGroup row aria-label="gender">
                                    <FormControlLabel value='USD' control={<Radio color="default" />} label="USD" />
                                    <FormControlLabel value='EURO' control={<Radio color="default" />} label="EURO" />
                                </RadioGroup>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className={classes.papaperItem}>
                                <RadioGroup row>
                                    <FormControlLabel value='SELL' control={<Radio color="default" />} label="SELL" />
                                    <FormControlLabel value='Buy' control={<Radio color="default" />} label="BUY" />
                                </RadioGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="exchange_rate"
                                label="exchangeRate"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="total_sum"
                                label="Amount"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs>

                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs>
                            <ButtonGroup fullWidth>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}>SEND
                                    </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >CANCEL
                                    </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}