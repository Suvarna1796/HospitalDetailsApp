import React, { PureComponent } from 'react';
import { Col } from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import '../../../App.css';


class TableComponent extends React.Component {
    constructor(props){
        super(props);
    }
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
        var props = this.props;
        const style_view = props.onViewDetail != undefined ? {} : { display: 'none' };
        const style_share = props.onShareDetail != undefined ? {} : { display: 'none' };
        const {
            rowsPerPage, page
        } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.cols.length - (page * rowsPerPage));
        console.log(this, "this in table component");

        return (
            <Col md={12} lg={12}>

                <div className="material-table__wrap">
                    <Table className="material-table">
                        <TableHead>
                            <TableRow>
                                {this.props.rows.map(row => (
                                    <TableCell
                                        key={row.id}>
                                        {row.label}
                                    </TableCell>
                                ), this)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.cols
                                .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                                .map((d) => {
                                    return (
                                        <TableRow hover
                                            className="material-table__row"
                                            tabIndex={-1}
                                            key={d.id}
                                        >

                                            <TableCell className="material-table__cell"
                                                component="th"
                                                scope="row"
                                                padding="none"
                                            >
                                                {d.name}
                                            </TableCell>
                                            <TableCell className="material-table__cell" >{d.address}</TableCell>
                                            <TableCell className="material-table__cell" >{d.hospitalType}</TableCell>
                                            <TableCell>
                                                <a  onClick={() => props.onViewDetail(d)} className="p-2" style={{ color: '#111111' }} >
                                                    <u> ViewDetails</u>
                                                </a>
                                            </TableCell>
                                            <TableCell >

                                                <a data-toggle="tooltip" title="Click here to copy the Link" className="p-2"  ><OpenInNewIcon className="yellowColor" onClick={() => props.onShareDetail(d)} />  </a>

                                            </TableCell>
                                            {/* <br /> */}
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
                    rowsPerPageOptions={[]}
                />

            </Col>
        );
    }
}
export default TableComponent