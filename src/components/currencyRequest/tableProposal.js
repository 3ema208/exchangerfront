import React from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Typography, TablePagination } from "@material-ui/core";
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


export default function ProposalTable(props) {
    const classes = makeStyles({
        root: {
            padding: "15px",
            marginTop: "10px",
        },
        tableCellHead: {
            backgroundColor: colors.black,
            color: colors.white,
            fontWeight: "bold"
        },
        blockTitle: {
            padding: "15px",
        }
    })();
    const proposal = props.proposal
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowPerPage] = React.useState(5)
    return (
        <div className={classes.root}>
            <Typography className={classes.blockTitle} variant="h4" align="left">All proposal</Typography>
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
                        {proposal.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((p, index) => (
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
                    rowsPerPageOptions={[5, 10, 25]}
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
                    }}/>
            </TableContainer>
        </div >

    )
}