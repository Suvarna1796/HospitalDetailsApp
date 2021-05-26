import React, { PureComponent } from 'react';
import { Col } from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import '../../../App.css';


export default class TableComponent extends PureComponent {
   
    state = {
        selected: [],
        page: 0,
        rowsPerPage: 5,
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {
        const {
            rowsPerPage, page
        } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.cols.length - (page * rowsPerPage));
        console.log(this, "1111111111111111");

        return (
            <Col md={12} lg={12}>

                <div className="material-table__wrap">
                    <Table className="material-table">
                        {this.props.rows.map(row => (
                            <TableCell
                                key={row.id}>
                                {row.label}
                            </TableCell>
                        ), this)}
                        <TableBody>
                            {this.props.cols
                                .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                                .map((d) => {
                                    return (
                                        <TableRow style={{ color: "blue !important" }}
                                            className="material-table__row"
                                            tabIndex={-1}
                                            key={d.id}
                                        >

                                            <TableCell style={{ color: "blue !important" }}
                                                className="material-table__cell"
                                                component="th"
                                                scope="row"
                                                padding="none"
                                            >
                                                {d.name}
                                            </TableCell>
                                            <TableCell className="material-table__cell" >{d.address}</TableCell>
                                            <TableCell className="material-table__cell" >{d.hospitalType}</TableCell>
                                            <TableCell className="material-table__cell" >{d.viewDetails}</TableCell>
                                            <TableCell className="material-table__cell" >{d.icon}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    className="material-table__pagination"
                    count={this.props.cols.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{ 'aria-label': 'Previous Page' }}
                    nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 15]}
                />

            </Col>
        );
    }
}
