import React from 'react';
import TableComponent from './Table/TableComponent';
import Grid from '@material-ui/core/Grid';
import '../../App.css';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

var rows = [
    { id: 'name', label: 'Name' },
    { id: 'address', label: 'Address' },
    { id: 'hospitalType', label: 'Hospital Type' },
    { id: 'viewDetails', label: '' },
    { id: 'icon', label: '' },
]
var cols = [
    { address: "Yeshwanthpur", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Government", id: 1, name: "Banglore Institute of Medical Sciences", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Yeshwanthpur", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Private", id: 2, name: "Krishna Institue of Medical Sciences", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Mathikere", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Private", id: 3, name: "M.S.Ramaiah College  And Hospital", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Mathikere", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Private", id: 4, name: "Subbiah Government Hospital", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "New Bel Road", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Trust", id: 5, name: "Mother Teresa Medical Trust", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Sanjaynagar", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Government", id: 6, name: "AI-Ameen Group Of Hospitals", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Yeshwanthpur", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Government", id: 7, name: "Cupcake", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Sanjaynagar", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Private", id: 8, name: "Cupcake", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Mathikere", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Government", id: 9, name: "Cupcake", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "New Bel Road", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Private", id: 10, name: "Cupcake", icon: <OpenInNewIcon className="yellowColor" /> },
    { address: "Sanjaynagar", viewDetails: <a href="http://example.com">View Details</a>, hospitalType: "Government", id: 11, name: "Cupcake", icon: <OpenInNewIcon className="yellowColor" /> }]

class PublicDashboard2 extends React.Component {
    render() {
        console.log(rows)
        return (
            <div>
                <Grid container >
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <TableComponent
                            cols={cols} rows={rows}>
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





