import React from 'react';
// import TablePagination from './Pagination';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import '../../App.css';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5,
        };

        this.displayRows = this.displayRows.bind(this);
        this.displayHeaders = this.displayHeaders.bind(this);
    }

    handleChangePage = (event, page) => {
        console.log(event, page, "pppppppppppppp")
        this.setState({ page });
    };
    handleChangeRowsPerPage = (event) => {
        console.log(event)
        this.setState({ rowsPerPage: event.target.value });
    };

    displayHeaders() {
        var cols = this.props.rows;
        return cols.map((colData, index) => {
            return <TableCell key={index}>
                <span className="header_title"> {colData.label}</span>
            </TableCell>;
        });
    }

    displayRows() {
        console.log(this.state);
        var cols = this.props.rows,
            rows = this.props.cols;
        var props = this.props;

        return rows.map((item, index) => {
            // console.log(item, this.props.viewDetailsFlag, "item");
            // handle the column data within each row
            var cells = cols.map(function (colData, index_col) {
                // colData.key might be "firstName"
                // console.log(colData.key)
                if (colData.label !== '') {
                    if (item[colData.key] === undefined) {
                        return <TableCell key={index_col}>-</TableCell>
                    }
                    else {
                        return <TableCell key={index_col}>{item[colData.key]}</TableCell>
                    }
                }
            });
            if (this.props.viewDetailsFlag === false) {
                return <TableRow key={index}>
                    {cells}
                    <TableCell style={{ width: '130px' }} >
                        <a onClick={() => props.onViewDetail(item)} className="p-2" style={{ color: '#111111' }} >
                            <u> ViewDetails</u>
                        </a>
                    </TableCell>
                    <TableCell>
                        <a data-toggle="tooltip" title="Click here to copy the Link" className="p-2"  >
                            <OpenInNewIcon className="yellowColor" onClick={() => props.onShareDetail(item)} />  </a>

                    </TableCell>
                </TableRow>
            }
            else {
                return <TableRow key={index}>
                    {cells}
                </TableRow>
            }

        });
    }
    render() {
        console.log(this.props, "props in table component")
        console.log(this.state, "state in table component")

        var rowComponents = this.displayRows(),
            headerComponent = this.displayHeaders();
        const {
            rowsPerPage, page
        } = this.state;
        rowComponents = rowComponents.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.cols.length - (this.state.page * rowsPerPage));

        return (
            <div>

                <div className="material-table__wrap">
                    <Table id="table" style={{ marginTop: '10px' }} className="material-table">
                        <TableHead>
                            <TableRow>
                                {headerComponent}
                            </TableRow>
                        </TableHead>
                        <TableBody >{rowComponents}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}</TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    className="material-table__pagination"
                    count={this.props.cols.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={page}
                    backIconButtonProps={{ 'aria-label': 'Previous Page' }}
                    nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    rowsPerPageOptions={[]}
                />
            </div>
        );
    }
}

export default (TableComponent);
