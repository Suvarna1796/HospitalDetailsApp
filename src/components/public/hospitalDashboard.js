import React from 'react';
import Header from '../header';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../../App.css';
import DatePicker from 'react-date-picker';
// import "react-datepicker/dist/react-datepicker.css";

class hopitalDefaultComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            dischargedateValue: new Date(),
            admissionDatevalue: new Date(),
            errors: []
        };
        this.handleTabChange = this.handleTabChange.bind(this);
        this.dischargeDate = this.dischargeDate.bind(this);
        this.admissionDate = this.admissionDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.patientDetailSubmit = this.patientDetailSubmit.bind(this);
        this.hospitalDetailSubmit = this.hospitalDetailSubmit.bind(this);
    }
    hospitalDetailSubmit() {

    }
    patientDetailSubmit() {

    }
    /*to capture the onchange input values*/
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.validateAllFileds(event.target.name, event.target.value);
    }
    /* Validating the form fields */
    validateAllFileds(fieldName, value) {
        switch (fieldName) {
            case 'hsptotalPatients':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]+$/)) {
                        this.setState({ hsptotalPatients: undefined });
                        this.state.errors.hsptotalPatients = 'Please enter valid number';
                    }
                    else {
                        this.state.errors.hsptotalPatients = '';
                    }
                }
                else {
                    this.setState({ hsptotalPatients: '' });
                    this.state.errors.hsptotalPatients = 'Required';
                }
                break;
            case 'hspOxygenAvail':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/)) {
                        this.setState({ hspOxygenAvail: undefined });
                        this.state.errors.hspOxygenAvail = 'Please enter valid number';
                    }
                    else {
                        this.state.errors.hspOxygenAvail = '';
                    }
                }
                else {
                    this.setState({ hspOxygenAvail: '' });
                    this.state.errors.hspOxygenAvail = 'Required';
                }
                break;
            case 'hspPatientName':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[A-Za-z]+$/)) {
                        this.setState({ hspPatientName: undefined });
                        this.state.errors.hspPatientName = 'Please enter valid name';
                    }
                    else {
                        this.state.errors.hspPatientName = '';
                    }
                }
                else {
                    this.setState({ hspPatientName: '' });
                    this.state.errors.hspPatientName = 'Required';
                }
                break;
            case 'hspPatientId':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]+$/)) {
                        this.setState({ hspPatientId: undefined });
                        this.state.errors.hspPatientId = 'Please enter valid ID';
                    }
                    else {
                        this.state.errors.hspPatientId = '';
                    }
                }
                else {
                    this.setState({ hspPatientId: '' });
                    this.state.errors.hspPatientId = 'Required';
                }
                break;
            case 'hspPatientAge':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]{2,3}$/)) {
                        this.setState({ hspPatientAge: undefined });
                        this.state.errors.hspPatientAge = 'Please enter valid Age';
                    }
                    else {
                        this.state.errors.hspPatientAge = '';
                    }
                }
                else {
                    this.setState({ hspPatientAge: '' });
                    this.state.errors.hspPatientAge = 'Required';
                }
                break;
            case 'hspPatientAadhar':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]{12}$/)) {
                        this.setState({ hspPatientAadhar: undefined });
                        this.state.errors.hspPatientAadhar = 'Please enter valid Aadhar Number';
                    }
                    else {
                        this.state.errors.hspPatientAadhar = '';
                    }
                }
                else {
                    this.setState({ hspPatientAadhar: '' });
                    this.state.errors.hspPatientAadhar = 'Required';
                }
                break;
            case 'hspAdmissionDetail':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[A-Za-z]+$/)) {
                        this.setState({ hspAdmissionDetail: undefined });
                        this.state.errors.hspAdmissionDetail = 'Please enter valid Admission Details';
                    }
                    else {
                        this.state.errors.hspAdmissionDetail = '';
                    }
                }
                else {
                    this.setState({ hspAdmissionDetail: '' });
                    this.state.errors.hspAdmissionDetail = 'Required';
                }
                break;
            case 'hspPatientStatus':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[A-Za-z]+$/)) {
                        this.setState({ hspPatientStatus: undefined });
                        this.state.errors.hspPatientStatus = 'Please enter valid Patient Status';
                    }
                    else {
                        this.state.errors.hspPatientStatus = '';
                    }
                }
                else {
                    this.setState({ hspPatientStatus: '' });
                    this.state.errors.hspPatientStatus = 'Required';
                }
                break;
        }
    }
    admissionDate(value) {
        this.setState({ admissionDatevalue: value })
    }
    dischargeDate(v) {
        this.setState({ dischargedateValue: v })
    }
    handleTabChange(event, tabvalue) {
        this.setState({
            value: tabvalue,
        });
    }

    render() {
        const { value } = this.state;

        return (
            <div>
                <Header title="Hospital Dashboard" />
                <div><br /></div>
                <div className="publicTabs ">
                    <Tabs className="TabIndicator" centered value={value} onChange={this.handleTabChange} >
                        <Tab label="Basic Details" className="tab1" />
                        <Tab label="Patient Details" className="tab2" />
                    </Tabs>
                    <br />
                    {value === 0 ? <div >
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel"  >Total Patients</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hsptotalPatients" id="hsptotalPatients" defaultValue="33" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errors.hsptotalPatients}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Total Beds</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <select className="form-control" id="hspBedsSelection" name="hspBedsSelection" >
                                    <option value="1">General Beds - 20</option>
                                    <option value="2">Ventilator Beds</option>
                                    <option value="3">ICU Beds</option>
                                </select>
                                <span className="error-msg">{this.state.errors.hspBedsSelection}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Occupied Beds</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <select className="form-control" id="hspOccupiedBeds" name="hspOccupiedBeds" >
                                    <option value="1">General Beds - 08</option>
                                    <option value="2">Ventilator Beds</option>
                                    <option value="3">ICU Beds</option>
                                </select>
                                <span className="error-msg">{this.state.errors.hspOccupiedBeds}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Empty Beds</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <select className="form-control" id="hspEmptyBeds" name="hspEmptyBeds" >
                                    <option value="1">General Beds - 11</option>
                                    <option value="2">Ventilator Beds</option>
                                    <option value="3">ICU Beds</option>
                                </select>
                                <span className="error-msg">{this.state.errors.hspEmptyBeds}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Oxygen Availability</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5} style={{ display: "flex" }}>
                                <input type="text" name="hspOxygenAvail" id="hspOxygenAvail" defaultValue="200 Cylinders" className="form-control" onChange={this.handleChange} />
                                <div style={{ flexGrow: " 1" }}>
                                    <span style={{ fontSize: '13px', paddingLeft: '1%' }}> 15L/Cylinder</span>
                                </div>
                                <span className="error-msg">{this.state.errors.hspOxygenAvail}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Medicine Status</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5} style={{ display: "flex" }}>
                                <select className="form-control" id="hspMedicalStatus" name="hspMedicalStatus" >
                                    <option value="1">Remedsvir</option>
                                    <option value="2">Fabiflu</option>
                                    <option value="3">Covaxin</option>
                                </select>
                                <div style={{ flexGrow: " 1" }}>
                                    <span style={{ fontSize: '13px', paddingLeft: '1%' }}> Doses</span>
                                </div>
                                <span className="error-msg">{this.state.errors.hspMedicalStatus}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={12} style={{ textAlign: 'center', justify: 'center' }}>
                                <Button variant="contained" className="save-btn" size="large" style={{ backgroundColor: '#BCA231', color: '#FFFFFF' }} onClick={this.hospitalDetailSubmit}>Submit details</Button>
                            </Grid>
                        </Grid>
                    </div> : <div>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Name Of Patient</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientName" id="hspPatientName" defaultValue="Rahul Mathur" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errors.hspPatientName}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Patient ID</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientId" id="hspPatientId" defaultValue="78954" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errors.hspPatientId}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Age Of Patient</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientAge" id="hspPatientAge" defaultValue="25" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errors.hspPatientAge}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Aadhar Number</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientAadhar" id="hspPatientAadhar" defaultValue="15897526956" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errors.hspPatientAadhar}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Date Of Admission</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <DatePicker style={{ width: '20%' }}
                                    onChange={this.admissionDate}
                                    // name="hspAdmissionDate" id="hspAdmissionDate"
                                    value={this.state.admissionDatevalue}
                                />
                                <span className="error-msg">{this.state.errors.LoginId}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Admission Details</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspAdmissionDetail" id="hspAdmissionDetail" defaultValue="Covid Positive, Ref By Dr Jatin" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errors.hspAdmissionDetail}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Discharge Date</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <DatePicker style={{ width: '20%' }}
                                    onChange={this.dischargeDate}
                                    value={this.state.dischargedateValue}
                                />
                                <span className="error-msg">{this.state.errors.LoginId}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Patient Status</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientStatus" id="hspPatientStatus" defaultValue="Recovered" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errors.hspPatientStatus}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing">
                            <Grid item xs={12} style={{ textAlign: 'center', justify: 'center' }}>
                                <Button variant="contained" className="save-btn" size="large" style={{ backgroundColor: '#BCA231', color: '#FFFFFF' }} onClick={this.patientDetailSubmit}>Submit details</Button>
                            </Grid>
                        </Grid>
                    </div>}
                </div>
            </div>
        )
    }
}
export default hopitalDefaultComponent;