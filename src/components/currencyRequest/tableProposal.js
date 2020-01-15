import React from 'react'
import { Link } from 'react-router-dom'
import {
    Paper, TableContainer, Typography,
    Table, TableHead, TableRow, TableCell,
    TableBody, makeStyles, TablePagination,
    Button, Grid, ButtonGroup
} from "@material-ui/core";
import colors from "../../stylesConst/colors"

const headerTitles = [
    { name: "Time" },
    { name: 'Sell || Buy' },
    { name: "Exchange Rates" },
    { name: "Amount" },
    { name: "User" },
    { name: "Comment" },
    { name: "Actions" },
];

const actionCurrency = [
    { name: "SELL", isActive: false, value: true },
    { name: "ALL", isActive: true, value: 'All' },
    { name: "BUY", isActive: false, value: false },
]

const currency = [
    { name: "USD", isActive: false, value: "USD" },
    { name: "ALL", isActive: true, value: "All" },
    { name: "EUR", isActive: false, value: "EUR" },
]

export default function ProposalTable(props) {
    const classes = makeStyles({
        root: {
            padding: "3px",
            marginTop: "5px",
        },
        filterGrid: {
            marginTop: "10px",
            marginBottom: "10px",
        },

        groupButtonFilter: {
            marginLeft: "2%",
            justifyContent: "center",
            fontStyle: "bold",
        },
        
        refreshBtn: {
            width: "100%",
            backgroundColor: "#fff",
        },

        addProposalBtn: {
            width: "100%",
            backgroundColor: "#fff",
        },

        buttonSelected: {
            color: colors.white,
            backgroundColor: colors.black,
            "&:hover": {
                color: colors.black,
            }
        },

        tableCellHead: {
            backgroundColor: colors.black,
            color: colors.white,
            fontWeight: "bold"
        },
        blockTitle: {
            textAlign: "center",
            verticalAlign: "center",
        },

        disActiveProposal: {
            textDecoration: "line-through",
        },
        actionButtonsIntrestiong: {
            backgroundColor: colors.green1,
            "&:hover": {
                backgroundColor: colors.green3
            }
        },
        actionButtonsDisabled: {
            backgroundColor: colors.lightGray2,
            "&:hover": {
                backgroundColor: colors.red2
            }
        }

    })();
    const proposal = props.proposal
    const curProposal = props.currentPropsals

    const setCurrentProposal = props.setCurrentProposal

    const [page, setPage] = React.useState(0)
    const rowsPersState = [10, 25, 50]
    const [rowsPerPage, setRowPerPage] = React.useState(rowsPersState[0])

    function filterProposalActive() {
        let filtedProposal = proposal
        for (let c of currency) {
            if (c.isActive) {
                if (c.value === 'All') { } else {
                    filtedProposal = filtedProposal.filter((p) => p.amount_currency === c.value)
                }
            }
        }
        for (let a of actionCurrency) {
            if (a.isActive) {
                if (a.value === 'All') { } else {
                    filtedProposal = filtedProposal.filter((p) => p.isSell === a.value)
                }
            }
        }
        setCurrentProposal(filtedProposal)
        setPage(0)
    }
    function changeCurrency(val) {
        for (let c of currency) {
            if (c.value === val) {
                c.isActive = true
            } else {
                c.isActive = false
            }
        }
        filterProposalActive()
    }

    function changeSellBuy(val) {
        for (let a of actionCurrency) {
            if (a.value === val) {
                a.isActive = true
            } else {
                a.isActive = false
            }
        }
        filterProposalActive()
    }

    function BtnsSelectedFiltered(props) {
        return (
            props.states.map((a, index) => (
                <Button
                    key={index}
                    value={a.name}
                    className={a.isActive ? classes.buttonSelected : null}
                    onClick={() => props.handleclick(a.value)}
                >
                    {a.name}
                </Button>
            ))
        )
    }
    function ButtonsAction({ proposal, user, isAuth, deactiveProposal, interestingProposal }) {
        if (proposal.active && proposal.telegram_info.id === user.id) {
            return (
                <Button className={classes.actionButtonsDisabled} onClick={() => (deactiveProposal(proposal))}>Deactivate</Button>
            )
        } else if (proposal.active && proposal.telegram_info.id !== user.id) {
            return (
                <Button
                    onClick={() => { interestingProposal(proposal, user) }}
                    disabled={!isAuth}
                    className={classes.actionButtonsIntrestiong}>Interestingly</Button>
            )
        } else {
            return (<Typography> ... ... </Typography>)
        }
    }

    function refreshHand(event) {
        props.getProposal()
        currency.map((c) => (c.isActive = false))
        currency[1].isActive = true

        actionCurrency.map(ac => (ac.isActive = false))
        actionCurrency[1].isActive = true

    }
    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="row" alignItems='flex-end' className={classes.filterGrid} justify="space-between">
                <Grid item xs={12} sm={3} >
                    <ButtonGroup variant="contained" className={classes.addProposalBtn}> 
                        <Button onClick={() => { refreshHand() }} className={classes.refreshBtn}>Refresh</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item align='center' xs={12} sm={3}>
                    <ButtonGroup variant="contained" className={classes.groupButtonFilter}>
                        <BtnsSelectedFiltered states={actionCurrency} handleclick={(val) => changeSellBuy(val)} />
                    </ButtonGroup>
                </Grid>
                <Grid item align='center' xs={12} sm={3}>
                    <ButtonGroup variant="contained" className={classes.groupButtonFilter}>
                        <BtnsSelectedFiltered states={currency} handleclick={(val) => changeCurrency(val)} />
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ButtonGroup variant="contained" className={classes.addProposalBtn} >
                        <Button 
                        component={Link} 
                        className={classes.addProposalBtn}
                        to='/addProposal' disabled={!props.isAuth}
                        >ADD PROPOSAL</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headerTitles.map((header, index) => (
                                <TableCell key={index}
                                    className={classes.tableCellHead}
                                    align="center"
                                >{header.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {curProposal.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((p, index) => (
                            <TableRow key={index} className={p.active ? null : classes.disActiveProposal} hover={p.active}>
                                <TableCell align="center">{p.time}</TableCell>
                                <TableCell align="center">{p.isSell ? "Sell" : "Buy"}</TableCell>
                                <TableCell align="center">{p.exchange_rates}</TableCell>
                                <TableCell align="center">{p.amount} {p.amount_currency}</TableCell>
                                <TableCell align="center">{p.telegram_info.username}</TableCell>
                                <TableCell align="center">{p.comment}</TableCell>
                                <TableCell align="center">
                                    <ButtonsAction
                                        proposal={p}
                                        user={props.user}
                                        isAuth={props.isAuth}
                                        deactiveProposal={props.deactiveProposal}
                                        interestingProposal={props.interestingProposal}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={rowsPersState}
                    component="div"
                    count={curProposal.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={(event, nPage) => {
                        setPage(nPage)
                    }}
                    onChangeRowsPerPage={(event) => {
                        setRowPerPage(parseInt(event.target.value, 10))
                        setPage(0)
                    }} />
            </TableContainer>
        </div >

    )
}