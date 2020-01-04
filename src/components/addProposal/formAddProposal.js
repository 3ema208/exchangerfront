import React from 'react'
import { Container, Grid, RadioGroup, FormControlLabel, Radio, ButtonGroup, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
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

    const changeSellBuy = (event) => {
        props.setSellBuy(event.target.value === 'true')
    }

    const [errorRateExchange, setErrorRateEchange] = React.useState(false)
    const rateExchangeRegxp = /^\d+\.\d{2}$/;
    const changeExchangRate = (event) => {
        let val = event.target.value
        let match = rateExchangeRegxp.test(val)
        setErrorRateEchange(!match)
        if (match) {
            props.setExchangeRate(parseFloat(val))
        } else {
            props.setExchangeRate(undefined)
        }
    }

    const [errorAmount, setErrorAmount] = React.useState(false)
    const amountRegExp = /^\d+/;
    const changeAmount = (event) => {
        let val = event.target.value
        let match = amountRegExp.test(val)
        setErrorAmount(!match)
        if (match) {
            props.setAmount(parseFloat(val))
        } else {
            props.setAmount(undefined)
        }
    }
    const [comment, setStateComment] = React.useState('')

    const submitHandleAddProposal = (event) => {
        event.preventDefault()
        if (errorRateExchange || errorAmount || !props.exchangeRate || !props.amount) {
            return
        } else {
            props.submitActionHand(props.currency, props.sellBuy, props.exchangeRate, props.amount, comment, props.user_id)
        }
    }

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
                                <RadioGroup row required 
                                    value={props.currency}
                                    onChange={(event) => { props.setCurrentCurrency(event.target.value) }}>
                                    <FormControlLabel value='USD' control={<Radio color="secondary" />} label="USD" />
                                    <FormControlLabel value='EUR' control={<Radio color="secondary" />} label="EUR" />
                                </RadioGroup>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className={classes.papaperItem}>
                                <RadioGroup row required
                                    value={props.sellBuy}
                                    onChange={changeSellBuy}
                                >
                                    <FormControlLabel value={true} control={<Radio color='secondary' />} label="SELL" />
                                    <FormControlLabel value={false} control={<Radio color='secondary' />} label="BUY" />
                                </RadioGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs>
                            <TextField
                                onChange={changeExchangRate}
                                helperText={errorRateExchange ? "For example 25.25" : null}
                                variant="outlined"
                                color='secondary'
                                margin="normal"
                                required
                                fullWidth
                                error={errorRateExchange}
                                id="exchange_rate"
                                label="exchangeRate"
                                autoFocus
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs>
                            <TextField
                                onChange={changeAmount}
                                helperText={errorAmount ? "Only decimal" : null}
                                variant="outlined"
                                color='secondary'
                                margin="normal"
                                error={errorAmount}
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
                            <TextField
                                multiline
                                variant="outlined"
                                color='secondary'
                                margin="normal"
                                required
                                fullWidth
                                rows={5}
                                rowsMax={4}
                                size="medium"
                                id="comment_id"
                                label="Comment"
                                value={comment}
                                onChange={(event) => { setStateComment(event.target.value) }}
                                autoFocus>

                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs>
                            <ButtonGroup fullWidth>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    component={Link} to='/'
                                    >CANCEL
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={(event)=>{submitHandleAddProposal(event)}}
                                    >SEND
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}