import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { compose } from "redux";
import { getpatients } from "../../actions/patientActions"
import { connect } from "react-redux"
import { TableHead } from '@material-ui/core';
import ModalAlertp from './ModalAlertp'



const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {

    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };


    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);


function createData(name, id) {
    return { id, name };
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});


class ListPatient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            page: 0,
            rowsPerPage: 5,
        }

    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: event.target.value });
    };

    componentDidMount() {
        this.props.getpatients();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ rows: nextProps.allpatients.patients })
    }
    render() {
        const { classes } = this.props;
        const { rows, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

        return (
            <div>
           

                <Paper className={classes.root}>

                    <div className={classes.tableWrapper}>
                        <Table className={classes.table}>
                            <TableHead>
                            <TableCell>Nom patient</TableCell>
                             <TableCell>Prénom patient</TableCell>
                             <TableCell >Adresse </TableCell>
                            <TableCell >Supprimer</TableCell>

                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                                    <TableRow key={row._id}>
                                        <TableCell component="th" scope="row">
                                            {row.Nom}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.Prenom}
                                        </TableCell>
                                   
                                        <TableCell component="th" scope="row">
                                            {row.Adress}
                                        </TableCell>
                                    
                                                                               
                                        <TableCell component="th" scope="row">
                                            <ModalAlertp id={row._id}/>
                                        </TableCell>
                                      
                                    </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 48 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        colSpan={3}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActionsWrapped}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </Paper>
            </div>

        );
    }
}

ListPatient.propTypes = {
    classes: PropTypes.object.isRequired,
};

const MapStateToProps = state => {
    return {
        allpatients: state.patient
    };
}

export default compose(withStyles(styles), connect(MapStateToProps, {getpatients}))(ListPatient);