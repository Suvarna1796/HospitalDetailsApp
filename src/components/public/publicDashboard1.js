import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import NativeSelect from '@material-ui/core/NativeSelect';
import '../../App.css';


class PublicDashboard1 extends React.Component {

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={5}>

                    {/* <FormControl > */}
                    {/* <label className="SelectLabel" className="SelectLabel">Enter your Country</label>
                    <NativeSelect fullWidth={true} >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect> */}
                    <label className="SelectLabel" >Enter your Country</label>
                    <select className="form-control" id="publicStateSelection" name="publicCountrySelection" >
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select>
                    <br />
                    <label className="SelectLabel">Enter your State</label>
                    <select className="form-control" id="publicStateSelection">
                        <option>Karnataka</option>
                        <option>Andhra Pradesh</option>
                        <option>Maharastra</option>
                        <option>Tamil Nadu</option>
                        <option>Delhi</option>
                    </select>
                    <br />
                    <label className="SelectLabel" >Enter your District</label>
                    <select className="form-control" id="publicDistrictSelection">
                        <option>Banglore</option>
                        <option>Manglore</option>
                        <option>Ballari </option>
                        <option>Bidar</option>
                        <option>Chikballapur</option>
                    </select>
                    <br />
                    <label className="SelectLabel">Enter your Area</label>
                    <select className="form-control" id="publicAreaSelection">
                        <option>Yeswanthpur</option>
                        <option>Jayanagar</option>
                        <option>Uttarahalli </option>
                        <option>Kumaraswamy</option>
                        <option>Girinagar</option>
                    </select>
                    <br />
                    <label className="SelectLabel">Enter your Ward/Sector/Landmark</label>
                    <select className="form-control" id="publicAreaSelection">
                        <option>Sector 6 </option>
                        <option>Sector 1</option>
                        <option>Sector 5 </option>
                        <option>Sector 4</option>
                        <option>Sector 3</option>
                    </select>
                    <br />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="search for nearby Hospitals"
                    />
                    <Grid container spacing={3}>
                        <Grid item xs>
                        </Grid>
                        <Grid item xs={5}>
                            <Button style={{ backgroundColor: "#BCA231", color: "#fff", textTransform: 'none' }}>
                                <Link to="/publicDashboard2" style={{ color: '#fff', textDecoration: "none" }}>  Search For Hospitals</Link></Button>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                    </Grid>
                    {/* <div className="row">
                        <div className="col-3"></div>
                        <div className="col-9">
                            <Button style={{ backgroundColor: "#BCA231", color: "#fff", textTransform: 'none' }}>
                            <Link to="/publicDashboard" style={{ color: '#fff', textDecoration: "none" }}>  Search For Hospitals</Link></Button>
                            </div>
                    </div> */}
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid >


        )
    }
}
export default PublicDashboard1;