import React from 'react'
import {Link} from 'react-router-dom'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, TablePagination, Button, Grid, ButtonGroup } from "@material-ui/core";
import colors from "../../stylesConst/colors"

const headerTitles = [
    { name: "#" },
    { name: "Time" },
    { name: 'Sell/Buy' },
    { name: "Exchange Rates" },
    { name: "Amount" },
    { name: "User" },
    { name: "Comment" },
];

const actionCurrency = [
    { name: "ALL", isActive: true, value: 'All' },
    { name: "SELL", isActive: false, value: true },
    { name: "BUY", isActive: false, value: false },
]

const currency = [
    { name: "ALL", isActive: true, value: "All" },
    { name: "USD", isActive: false, value: "USD" },
    { name: "EURO", isActive: false, value: "EURO" },
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

        filter: {},

        buttonSelected: {
            backgroundColor: colors.lightGray2,
        },

        tableCellHead: {
            backgroundColor: colors.black,
            color: colors.white,
            fontWeight: "bold"
        },
        blockTitle: {
            textAlign: "center",
            verticalAlign: "center",
        }
    })();
    const proposal = props.proposal
    const curProposal = props.currentPropsals

    const setCurrentProposal = props.setCurrentProposal

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowPerPage] = React.useState(16)

    function changeCurrency(val) {
        currency.map((c) => {
            if (c.value === val) {
                c.isActive = true
            } else {
                c.isActive = false
            }
        })
        if (val === currency[0].value) {
            setCurrentProposal(proposal)
            setPage(0)
        } else {
            setCurrentProposal(curProposal.filter((p) => p.amount_currency === val))
        }
    }

    function changeSellBuy(val) {
        actionCurrency.map((a) => {
            if (a.value === val) {
                a.isActive = true
            } else {
                a.isActive = false
            }
        })
        if (val === actionCurrency[0].value) {
            setCurrentProposal(proposal)
            setPage(0)
        } else {
            setCurrentProposal(curProposal.filter((p) => {return p.isSell === val}))
            setPage(0)
        }
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

    return (
        <div className={classes.root}>
            <Grid container spacing={3} alignItems="flex-start" justify="flex-end" direction="row" className={classes.filterGrid}>
                <Grid item>
                    <Paper>
                        <ButtonGroup>
                            <BtnsSelectedFiltered states={actionCurrency} handleclick={(val) => changeSellBuy(val)} />
                        </ButtonGroup>
                    </Paper>
                </Grid>
                <Grid item align="center">
                    <Paper>
                        <ButtonGroup align='center'>
                            <BtnsSelectedFiltered states={currency} handleclick={(val) => changeCurrency(val)} />
                        </ButtonGroup>
                    </Paper>
                </Grid>
                <Grid item aling="right">
                    <Paper>
                        <ButtonGroup>
                            <Button component={Link} to='/addProposal'>ADD</Button>
                        </ButtonGroup>
                    </Paper>
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
                            <TableRow key={index}>
                                <TableCell align='right'>{index + 1}</TableCell>
                                <TableCell align="center">{p.time}</TableCell>
                                <TableCell align="center">{p.isSell ? "Sell" : "Buy"}</TableCell>
                                <TableCell align="center">{p.exchange_rates}</TableCell>
                                <TableCell align="center">{p.amount} {p.amount_currency}</TableCell>
                                <TableCell align="center">{p.user.username}</TableCell>
                                <TableCell align="center">{p.comment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[16, 32, 64]}
                    component="div"
                    count={proposal.length}
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