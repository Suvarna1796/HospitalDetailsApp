import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import TableComponent from './Table/TableComponent';
import Grid from '@material-ui/core/Grid';
import '../../App.css';


var rows = [
    { id: 'name', label: 'Name' },
    { id: 'address', label: 'Address' },
    { id: 'hospitalType', label: 'Hospital Type' },
    { id: 'viewDetails', label: '' },
    { id: 'icon', label: '' },
]
var cols = [
    { address: "Yeshwanthpur", hospitalType: "Government", id: 1, name: "Banglore Institute of Medical Sciences" },
    { address: "Yeshwanthpur", hospitalType: "Private", id: 2, name: "Krishna Institue of Medical Sciences" },
    { address: "Mathikere", hospitalType: "Private", id: 3, name: "M.S.Ramaiah College  And Hospital" },
    { address: "Mathikere", hospitalType: "Private", id: 4, name: "Subbiah Government Hospital" },
    { address: "New Bel Road", hospitalType: "Trust", id: 5, name: "Mother Teresa Medical Trust" },
    { address: "Sanjaynagar", hospitalType: "Government", id: 6, name: "AI-Ameen Group Of Hospitals" },
    { address: "Yeshwanthpur", hospitalType: "Government", id: 7, name: "Manjunath Charitable Hospital" },
    { address: "Sanjaynagar", hospitalType: "Private", id: 8, name: "SJ Hospital" },
    { address: "Mathikere", hospitalType: "Government", id: 9, name: "Banglore Mahanagar Palika" },
    { address: "New Bel Road", hospitalType: "Private", id: 10, name: "Ramaiah Memorial Hospital" },
    { address: "Sanjaynagar", hospitalType: "Government", id: 11, name: "Central Government Wellness Hospital" }]

class PublicDashboard2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenEditRow = this.handleOpenEditRow.bind(this);
        this.shareDetailsRow = this.shareDetailsRow.bind(this);
    }
    handleOpenEditRow(i) {
        console.log(i, "111111111111111")
    }
    shareDetailsRow(details) {
        console.log(details, "2222222222222222222")
    }
    render() {
        console.log(rows)
        return (
            <div >
                <div>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <FingerprintIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Public Dashboard
          </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <Grid container ><Grid></Grid></Grid>
                <Grid container className="AppBody">
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <TableComponent id="publicTable"
                            cols={cols} rows={rows}
                            onViewDetail={this.handleOpenEditRow}
                            onShareDetail={this.shareDetailsRow}>
                        </TableComponent>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default PublicDashboard2





