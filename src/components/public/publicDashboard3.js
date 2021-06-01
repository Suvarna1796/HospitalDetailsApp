import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import '../../App.css';

class PublicDashboard3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.sample = this.sample.bind(this);
    }
    sample() {
        console.log(this.state, "132413135")
        this.setState({
            viewDetailsFlag: false,
        });
    }
    handleChange(event, tabvalue) {
        console.log(event);
        console.log(this.state.value);
        this.setState({
            value: tabvalue,
        });
    }
    render() {
        const { value } = this.state;
        console.log("this.props in 3", this.props);
        return (
            <div className="publicTabs ">
                <Tabs className="TabIndicator" centered value={value} onChange={this.handleChange} >
                    <Tab label="Basic Details" className="tab1" />
                    <Tab label="Real Time Details" className="tab2" />
                </Tabs>
                <br />
                {value === 0 ? <div >
                    <Grid container className="GridSpacing" >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel"  >Hospital Name</label>
                        </Grid>
                        <Grid item >&emsp;</Grid>
                        <Grid item xs={5}>
                            <input type="text" id="PublicHospitalName" name="PublicHospitalName" className="form-control" value={this.props.data.name} disabled={true} />
                        </Grid>
                    </Grid>
                    <Grid container className="GridSpacing" >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >No Of Beds</label>
                        </Grid>
                        <Grid item >&emsp;</Grid>
                        <Grid item xs={5}>
                            <select className="form-control" id="publicbedsSelection" name="publicbedsSelection" disabled={true}>
                                <option>General Beds - 20</option>
                                <option>Ventilator Beds</option>
                                <option>ICU Beds</option>
                            </select>

                        </Grid>
                    </Grid>
                    <Grid container className="GridSpacing" >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >No Of Staff</label>
                        </Grid>
                        <Grid item >&emsp;</Grid>
                        <Grid item xs={5}>
                            <select className="form-control" id="publicStaffSelection" name="publicStaffSelection" disabled={true}>
                                <option>Nurses - 14</option>
                                <option>Compounders</option>
                                <option>Nurses</option>
                                <option>Helpers</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container className="GridSpacing" >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >Departments</label>
                        </Grid>
                        <Grid item >&emsp;</Grid>
                        <Grid item xs={5}>
                            <select className="form-control" id="publicDepartmentSelection" name="publicDepartmentSelection" disabled={true} >
                                <option>Opthamology </option>
                                <option>Cardiology </option>
                                <option>Pediatrics </option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container className="GridSpacing" >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >Doctors Per Dept</label>
                        </Grid>
                        <Grid item >&emsp;</Grid>
                        <Grid item xs={5}>
                            <select className="form-control" id="publicDoctoeDepSelection" name="publicDoctorDepSelection" disabled={true}>
                                <option>Opthamology - 5</option>
                                <option>Cardiology - 6</option>
                                <option>Pediatrics - 10</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container className="GridSpacing" >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >Facilities</label>
                        </Grid>
                        <Grid item >&emsp;</Grid>
                        <Grid item xs={5}>
                            <select className="form-control" id="publicFacilitiesSelection" name="publicFacilitiesSelection" disabled={true}>
                                <option>Oxygen</option>
                                <option>Covid Care Unit</option>
                                <option>Medical Facility</option>
                                <option>Extra Facility</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container className="GridSpacing" >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >Hospital Type</label>
                        </Grid>
                        <Grid item >&emsp;</Grid>
                        <Grid item xs={5}>
                            <input type="text" id="PublicHospitalType" name="PublicHospitalType" className="form-control" value={this.props.data.hospitalType} disabled={true} />
                        </Grid>
                    </Grid>
                </div>
                    : <div>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Beds Availability</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <select className="form-control" id="publicBedsSelection" name="publicBedsSelection" disabled={true}>
                                    <option>General Beds - 10</option>
                                    <option>Ventilator Beds</option>
                                    <option>ICU Beds</option>
                                </select>
                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Oxygen Availability</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5} style={{ display: "flex" }}>
                                <input type="text" id="PublicOxygenAvailability" name="PublicOxygenAvailability" className="form-control" value={this.props.data.oxygen} disabled={true} />
                                <div style={{ flexGrow: " 1" }}>
                                    <span style={{ fontSize: '13px', paddingLeft: '1%' }}> 15L/Cylinder</span>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Medicines Availability</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}  style={{ display: "flex" }}>
                                <select className="form-control" id="publicMedicinesSelection" name="publicMedicinesSelection" disabled={true}>
                                    <option>Remedsvir</option>
                                    <option>Fabiflu</option>
                                    <option>Covaxin</option>
                                </select>
                                <div style={{ flexGrow: " 1" }}>
                                    <span style={{ fontSize: '13px', paddingLeft: '1%' }}> Doses</span>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
            </div >
        )
    }
}
export default PublicDashboard3


