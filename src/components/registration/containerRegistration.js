import React from "react"
import { connect } from "react-redux"
import { Container, Typography, TextField, Grid, Link, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

import { telgramBotURL } from '../../telegramConst'
import colors from '../../stylesConst/colors'

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    btnSubmit: {
        color: colors.white,
        backgroundColor: colors.black,
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            backgroundColor: colors.spaceGray,
        }
    },

    abountBotInfo: {
        height: "10em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})

class RegistrationFormContainer extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Container component="main">
                <Grid container>
                    <Grid item xs={6} spacing={2}>
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Registration
                            </Typography>
                            <Container component="main" maxWidth='xs'>
                                <form>
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="username"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="email"
                                        autoComplete="email"
                                    />
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        label="password"
                                        autoComplete="password"
                                        type="password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnSubmit}
                                    >SEND</Button>
                                </form>
                            </Container>

                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.paper}>
                            <Typography component="h1" variant='h5'>
                                Telegram
                                </Typography>
                            <div className={classes.abountBotInfo}>
                                <Typography>
                                    <Link
                                        href={telgramBotURL}
                                        target="_blank"
                                        color="secondary">
                                        Send your email this bot after confirm form
                                    </Link>
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const mapProps = store => {
    return {}
}

const mapDispatch = dispatch => {
    return ({

    })
}

export default connect(mapProps, mapDispatch)(withStyles(styles)(RegistrationFormContainer))