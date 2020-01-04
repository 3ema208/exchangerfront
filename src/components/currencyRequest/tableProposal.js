import React from 'react'
import { Link } from 'react-router-dom'
import {
    Paper, TableContainer, Typography,
    Table, TableHead, TableRow, TableCell, TableBody, makeStyles, TablePagination, Button, Grid, ButtonGroup
} from "@material-ui/core";
import colors from "../../stylesConst/colors"

const headerTitles = [
    { name: "Time" },
    { name: 'Sell/Buy' },
    { name: "Exchange Rates" },
    { name: "Amount" },
    { name: "User" },
    { name: "Comment" },
    { name: "Actions" },
];

const actionCurrency = [
    { name: "ALL", isActive: true, value: 'All' },
    { name: "SELL", isActive: false, value: true },
    { name: "BUY", isActive: false, value: false },
]

const currency = [
    { name: "ALL", isActive: true, value: "All" },
    { name: "USD", isActive: false, value: "USD" },
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
            marginLeft: "10px",
            border: `1px solid ${colors.lightgray3}`,
            fontStyle: "bold",
            backgroundColor: colors.white,
        },

        buttonSelected: {
            color: colors.white,
            backgroundColor: colors.black,
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
    function ButtonsAction({ proposal, user_id, isAuth }) {
        if (proposal.active && proposal.user.id === user_id) {
            return (
                <Button className={classes.actionButtonsDisabled}>Deactivate</Button>
            )
        } else if (proposal.active && proposal.user.id !== user_id) {
            return (
                <Button disabled={!isAuth} className={classes.actionButtonsIntrestiong}>Intresting</Button>
            )
        } else {
            return (<Typography> ... ... </Typography>)
        }
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={1} direction="row" alignItems='flex-end' className={classes.filterGrid}>
                <Grid item align="left" xs={3}>
                    <ButtonGroup>
                        <Button onClick={()=>{props.getProposal()}}>Refresh</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item align="right" xs={8}>
                    <ButtonGroup variant="contained" className={classes.groupButtonFilter}>
                        <BtnsSelectedFiltered states={actionCurrency} handleclick={(val) => changeSellBuy(val)}/>
                    </ButtonGroup>
                    <ButtonGroup variant="contained" className={classes.groupButtonFilter}>
                        <BtnsSelectedFiltered states={currency} handleclick={(val) => changeCurrency(val)} />
                    </ButtonGroup>
                </Grid>
                <Grid item align="right" xs={1}>
                    <ButtonGroup>
                        <Button component={Link} to='/addProposal' disabled={!props.isAuth}>ADD</Button>
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
                                <TableCell align="center">{p.user.username}</TableCell>
                                <TableCell align="center">{p.comment}</TableCell>
                                <TableCell align="center">
                                    <ButtonsAction proposal={p} user_id={props.user_id} isAuth={props.isAuth}/>
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