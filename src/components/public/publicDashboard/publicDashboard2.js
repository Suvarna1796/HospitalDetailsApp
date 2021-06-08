import React from 'react';
import HeaderComponent from '../../header'
import TableComponent from '../Table/TableComponent';
import Grid from '@material-ui/core/Grid';
import '../../../App.css';
import copy from "copy-to-clipboard";
import PublicDashboard3 from './publicDashboard3';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


var rows = [
    { key: 'name', label: 'Name' },
    { key: 'address', label: 'Address' },
    { key: 'hospitalType', label: 'Hospital Type' },
    { key: 'viewDetails', label: '' },
    { key: 'icon', label: '' },
]
var cols = [
    { name: "Banglore Institute of Medical Sciences", address: "Yeshwanthpur", hospitalType: "Government", id: 1, oxygen: "200 Cylinders" },
    { name: "Krishna Institue of Medical Sciences", address: "Yeshwanthpur", hospitalType: "Private", id: 2, oxygen: "250 Cylinders" },
    { name: "M.S.Ramaiah College  And Hospital", address: "Mathikere", hospitalType: "Private", id: 3, oxygen: "300 Cylinders" },
    { name: "Subbiah Government Hospital", address: "Mathikere", hospitalType: "Private", id: 4, oxygen: "90 Cylinders" },
    { name: "Mother Teresa Medical Trust", address: "New Bel Road", hospitalType: "Trust", id: 5, oxygen: "200 Cylinders" },
    { name: "AI-Ameen Group Of Hospitals", address: "Sanjaynagar", hospitalType: "Government", id: 6, oxygen: "150 Cylinders" },
    { name: "Manjunath Charitable Hospital", address: "Yeshwanthpur", hospitalType: "Government", id: 7, oxygen: "260 Cylinders" },
    { name: "SJ Hospital", address: "Sanjaynagar", hospitalType: "Private", id: 8, oxygen: "350 Cylinders" },
    { name: "Banglore Mahanagar Palika", address: "Mathikere", hospitalType: "Government", id: 9, oxygen: "190 Cylinders" },
    { name: "Ramaiah Memorial Hospital", address: "New Bel Road", hospitalType: "Private", id: 10, oxygen: "170 Cylinders" },
    { name: "Central Government Wellness Hospital", address: "Sanjaynagar", hospitalType: "Government", id: 11, oxygen: "90 Cylinders" }]

class PublicDashboard2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewdetails: {},
            viewDetailsFlag: false
        }
        this.handleOpenEditRow = this.handleOpenEditRow.bind(this);
        this.shareDetailsRow = this.shareDetailsRow.bind(this);
        this.sample = this.sample.bind(this);
    }
    sample() {
        this.setState({ viewDetailsFlag: false })
    }
    handleOpenEditRow(i) {
        console.log(i, "111111111111111  view details")
        // this.state.viewdetails = i;
        this.setState({ viewDetailsFlag: true, viewdetails: i });
        <Link to='/'></Link>
    }
    shareDetailsRow(details) {
        this.setState({ viewDetailsFlag: {} });
        console.log(details, "2222222222222222222   share details");
        copy(details.name);
        this.setState({ viewDetailsFlag: false })
        // var tooltip = document.querySelectorAll(details.name);
        // tooltip.style.visibility = 'visible';
    }
    render() {
        console.log(rows, "rows in 2 render", this.state.viewDetailsFlag)
        return (
            <div >
                <HeaderComponent title='Public Dashboard' />

                {this.state.viewDetailsFlag === true ? <div><div style={{ paddingTop: '2%' }}> <ArrowBackIcon onClick={this.sample} /></div> <PublicDashboard3 data={this.state.viewdetails} > <input type="hidden" onChange={this.sample} /></PublicDashboard3></div> :
                    <div>
                        <Grid container ><Grid></Grid></Grid>
                        <Grid container className="AppBody">
                            <Link to='/publicDashboard1' style={{ textDecoration: 'none', color: '#111111' }}>
                                <ArrowBackIcon />
                            </Link>
                            <Grid item xs>
                            </Grid>
                            <Grid item xs={6}>
                                <TableComponent id="publicTable"
                                    cols={cols} rows={rows}
                                    viewDetailsFlag={this.state.viewDetailsFlag}
                                    onViewDetail={this.handleOpenEditRow}
                                    onShareDetail={this.shareDetailsRow}
                                >
                                </TableComponent>
                            </Grid>
                            <Grid item xs>
                            </Grid>
                        </Grid>
                    </div>}
                {/* {this.props.showEditPlan || this.props.showViewPlan ? 
                    <EditRiskImpact dataObj={this.props.dataObj} view={this.props.view} oncancel={this.handleClose} /> : ''} */}
            </div>
        )
    }
}
export default PublicDashboard2





