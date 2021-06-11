import React from 'react';
import Header from '../header';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../../App.css';
import DatePicker from 'react-date-picker';
import FooterComponent from '../footer';
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
                        this.setState({ hsptotalPatients: undefined, errorHsptotalPatients: 'Please enter valid number' });
                    }
                    else {
                        this.setState({ errorHsptotalPatients: '' });
                    }
                }
                else {
                    this.setState({ hsptotalPatients: '', errorHsptotalPatients: 'Required' });
                }
                break;
            case 'hspOxygenAvail':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^(?:[0-9]|[a-zA-Z ]+[0-9])[a-zA-Z0-9 ]*$/i)) {
                        this.setState({ hspOxygenAvail: undefined, errorHspOxygenAvail: 'Please enter valid number' });
                    }
                    else {
                        this.setState({ errorHspOxygenAvail: '' });
                    }
                }
                else {
                    this.setState({ hspOxygenAvail: '', errorHspOxygenAvail: 'Required' });
                }
                break;
            case 'hspPatientName':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[A-Za-z]+$/)) {
                        this.setState({ hspPatientName: undefined, errorHspPatientName: 'Please enter valid name' });
                    }
                    else {
                        this.setState({ errorHspPatientName: '' });
                    }
                }
                else {
                    this.setState({ hspPatientName: '', errorHspPatientName: 'Required' });
                }
                break;
            case 'hspPatientId':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]+$/)) {
                        this.setState({ hspPatientId: undefined, errorHspPatientId: 'Please enter valid ID' });
                    }
                    else {
                        this.setState({ errorHspPatientId: '' });
                    }
                }
                else {
                    this.setState({ hspPatientId: '', errorHspPatientId: 'Required' });
                }
                break;
            case 'hspPatientAge':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]{2,3}$/)) {
                        this.setState({ hspPatientAge: undefined, errorHspPatientAge: 'Please enter valid Age' });
                    }
                    else {
                        this.setState({ errorHspPatientAge: '' });
                    }
                }
                else {
                    this.setState({ hspPatientAge: '', errorHspPatientAge: 'Required' });
                }
                break;
            case 'hspPatientAadhar':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]{12}$/)) {
                        this.setState({ hspPatientAadhar: undefined, errorHspPatientAadhar: 'Please enter valid Aadhar Number' });
                    }
                    else {
                        this.setState({ errorHspPatientAadhar: '' });
                    }
                }
                else {
                    this.setState({ hspPatientAadhar: '', errorHspPatientAadhar: 'Required' });
                }
                break;
            case 'hspAdmissionDetail':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[A-Za-z]+$/)) {
                        this.setState({ hspAdmissionDetail: undefined, errorHspAdmissionDetail: 'Please enter valid Admission Details' });
                    }
                    else {
                        this.setState({ errorHspAdmissionDetail: '' });
                    }
                }
                else {
                    this.setState({ hspAdmissionDetail: '', errorHspAdmissionDetail: 'Required' });
                }
                break;
            case 'hspPatientStatus':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[A-Za-z]+$/)) {
                        this.setState({ hspPatientStatus: undefined, errorHspPatientStatus: 'Please enter valid Patient Status' });
                    }
                    else {
                        this.setState({ errorHspPatientStatus: '' });
                    }
                }
                else {
                    this.setState({ hspPatientStatus: '', errorHspPatientStatus: 'Required' });
                }
                break;
            default: break;
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
                <Header  search={value === 0 ? "pateintName" : value === 1 ? "pateintId" : ''} />
                <div><br /></div>
                <div className="publicTabs ">
                    <Tabs className="TabIndicator" TabIndicatorProps={{style: {backgroundColor: "#1E2F50"}}} centered value={value} onChange={this.handleTabChange} >
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
                                <span className="error-msg">{this.state.errorHsptotalPatients}</span>

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
                            <Grid item xs={5} >
                                <div style={{ display: "flex" }}>
                                    <input type="text" name="hspOxygenAvail" id="hspOxygenAvail" defaultValue="200 Cylinders" className="form-control" onChange={this.handleChange} />
                                    <div style={{ flexGrow: " 1" }}>
                                        <span style={{ fontSize: '13px', paddingLeft: '1%' }}> 15L/Cylinder</span>
                                    </div>
                                </div>
                                <span className="error-msg">{this.state.errorHspOxygenAvail}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right' }}>
                                <label className="SelectLabel" >Medicine Status</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5} >
                                <div style={{ display: "flex" }}>
                                    <select className="form-control" id="hspMedicalStatus" name="hspMedicalStatus" >
                                        <option value="1">Remedsvir</option>
                                        <option value="2">Fabiflu</option>
                                        <option value="3">Covaxin</option>
                                    </select>
                                    <div style={{ flexGrow: " 1" }}>
                                        <span style={{ fontSize: '13px', paddingLeft: '1%' }}> Doses</span>
                                    </div>
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
                                <span className="error-msg">{this.state.errorHspPatientName}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Patient ID</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientId" id="hspPatientId" defaultValue="78954" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errorHspPatientId}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Age Of Patient</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientAge" id="hspPatientAge" defaultValue="25" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errorHspPatientAge}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing" >
                            <Grid item xs={5} style={{ textAlign: 'right', justify: 'center' }}>
                                <label className="SelectLabel"  >Aadhar Number</label>
                            </Grid>
                            <Grid item >&emsp;</Grid>
                            <Grid item xs={5}>
                                <input type="text" name="hspPatientAadhar" id="hspPatientAadhar" defaultValue="15897526956" className="form-control" onChange={this.handleChange} />
                                <span className="error-msg">{this.state.errorHspPatientAadhar}</span>

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
                                <span className="error-msg">{this.state.errorHspAdmissionDetail}</span>

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
                                <span className="error-msg">{this.state.errorHspPatientStatus}</span>

                            </Grid>
                        </Grid>
                        <Grid container className="GridSpacing">
                            <Grid item xs={12} style={{ textAlign: 'center', justify: 'center' }}>
                                <Button variant="contained" className="save-btn" size="large" style={{ backgroundColor: '#BCA231', color: '#FFFFFF' }} onClick={this.patientDetailSubmit}>Submit details</Button>
                            </Grid>
                        </Grid>
                    </div>}
                </div>
                <FooterComponent name="login"/>
            </div>
        )
    }
}
export default hopitalDefaultComponent;