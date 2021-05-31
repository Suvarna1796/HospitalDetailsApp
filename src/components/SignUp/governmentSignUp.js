import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../header';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import ClientCaptcha from "react-client-captcha"
import Button from '@material-ui/core/Button';

class GovernmentSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            captchaCode: '',
            errors: [],
            SignUpValidation: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    /*to capture the onchange input values*/
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value, SignUpValidation: false
        });
        this.validateAllFileds(event.target.name, event.target.value);
    }
    /*handle submit form */
    handleLogin() {
        if (this.state.firstName === undefined || this.state.lastName === undefined || this.state.corpMailAdd === undefined ||
            this.state.setPassword === undefined || this.state.cnfPassword === undefined || this.state.designation === undefined ||
            this.state.department === undefined || this.state.empCode === undefined || this.state.Ofcaddress === undefined ||
            this.state.city === undefined || this.state.gstate === undefined || this.state.pinCode === undefined) {
            console.log("in submit", this.state.firstName, this.state.captchaCode);
            this.setState({ SignUpValidation: true });
        }
        else {
            this.setState({ SignUpValidation: false })
        }
        //captcha validation
        if (this.state.inputCaptcha) {
            this.state.CaptchaIsValid = false;
            if (this.state.captchaCode !== this.state.inputCaptcha) {
                this.state.errors.inputCaptcha = 'Please enter valid captcha';
            } else {
                this.state.errors.inputCaptcha = '';
                this.setState({ CaptchaIsValid: false })
            }
        }
        else {
            this.setState({ inputCaptcha: '' });
            this.state.errors.inputCaptcha = 'Required';
        }
        //password validation
        if (this.state.setPassword && this.state.cnfPassword) {
            if (this.state.setPassword === this.state.cnfPassword) {
                this.state.errors.cnfPassword = '';

            }
            else {
                this.state.errors.cnfPassword = 'Passwords do not match';
            }
        }
    }

    /*captcha */
    setCode = captchaCode => {
        this.setState({ captchaCode })
    }
    /*to get tab value*/
    handleTabChange(event, tabvalue) {
        this.setState({
            value: tabvalue,
        });
        if (tabvalue === 0) {
            this.props.history.push('/');
        }
    }

    /* Validating the form fields */
    validateAllFileds(fieldName, value) {
        switch (fieldName) {
            case 'firstName':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ firstName: undefined });
                        this.state.errors.firstName = 'First Name should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.firstName = '';
                    }
                }
                else {
                    this.setState({ firstName: '' });
                    this.state.errors.firstName = 'Required';
                }
                break;
            case 'lastName':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ lastName: undefined });
                        this.state.errors.lastName = 'Last Name should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.lastName = '';
                    }
                }
                else {
                    this.setState({ lastName: '' });
                    this.state.errors.lastName = 'Required';
                }
                break;
            case 'corpMailAdd':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ corpMailAdd: undefined });
                        this.state.errors.corpMailAdd = 'Corporate Mail Address should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.corpMailAdd = '';
                    }
                }
                else {
                    this.setState({ corpMailAdd: '' });
                    this.state.errors.corpMailAdd = 'Required';
                }
                break;
            case 'setPassword':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ setPassword: undefined });
                        this.state.errors.setPassword = 'Set Password should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.setPassword = '';
                    }
                }
                else {
                    this.setState({ setPassword: '' });
                    this.state.errors.setPassword = 'Required';
                }
                break;

            case 'cnfPassword':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ cnfPassword: undefined });
                        this.state.errors.cnfPassword = 'Confirm Password should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.cnfPassword = '';
                    }
                }
                else {
                    this.setState({ cnfPassword: '' });
                    this.state.errors.cnfPassword = 'Required';
                }
                break;
            case 'designation':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ designation: undefined });
                        this.state.errors.designation = 'Designation should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.designation = '';
                    }
                }
                else {
                    this.setState({ designation: '' });
                    this.state.errors.designation = 'Required';
                }
                break;
            case 'department':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ department: undefined });
                        this.state.errors.department = 'Department should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.department = '';
                    }
                }
                else {
                    this.setState({ department: '' });
                    this.state.errors.department = 'Required';
                }
                break;
            case 'empCode':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ empCode: undefined });
                        this.state.errors.empCode = 'Employee Code should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.empCode = '';
                    }
                }
                else {
                    this.setState({ empCode: '' });
                    this.state.errors.empCode = 'Required';
                }
                break;
            case 'Ofcaddress':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ Ofcaddress: undefined });
                        this.state.errors.Ofcaddress = 'Office Address should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.Ofcaddress = '';
                    }
                }
                else {
                    this.setState({ Ofcaddress: '' });
                    this.state.errors.Ofcaddress = 'Required';
                }
                break;
            case 'city':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z ]*$/)) {
                        this.setState({ city: undefined });
                        this.state.errors.city = 'Please enter valid City';
                    }
                    else {
                        this.state.errors.city = '';
                    }
                }
                else {
                    this.setState({ city: '' });
                    this.state.errors.city = 'Required';
                }
                break;
            case 'gstate':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z ]*$/)) {
                        this.setState({ gstate: undefined });
                        this.state.errors.gstate = 'Please enter valid State';
                    }
                    else {
                        this.state.errors.gstate = '';
                    }
                }
                else {
                    this.setState({ gstate: '' });
                    this.state.errors.gstate = 'Required';
                }
                break;

            case 'pinCode':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]/)) {
                        this.setState({ pinCode: undefined });
                        this.state.errors.pinCode = 'Please enter valid Pin Code ';
                    }
                    else {
                        this.state.errors.pinCode = '';
                    }
                }
                else {
                    this.setState({ pinCode: '' });
                    this.state.errors.pinCode = 'Required';
                }
                break;
        }
    }

    render() {
        return (
            <div className="signUp">
                <Header title='Uoodmaish' />
                <Grid container className="AppBody" >
                    <Grid item xs={12} style={{ textAlign: 'center', fontSize: '22px' }} fontWeight="fontWeightBold">
                        Signup As Government
                        </Grid>
                </Grid>
                <div className="" style={{ paddingTop: '11px', paddingBottom: '1%' }}>
                    <Container maxWidth="md" className="boxStyle" style={{ border: '4px solid #E8E8E8' }}>
                        {/* signlkjlk */}
                        <Tabs value={this.state.value} onChange={this.handleTabChange}
                            indicatorColor="primary" textColor="primary"
                            centered style={{ paddingBottom: '7px' }}>
                            <Tab label="Login" ></Tab>
                            <Tab label="Signup" />
                        </Tabs>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={4} style={{ paddingRight: '1%' }}>
                                <TextField
                                    id="filled-firstName-input"
                                    label="First Name"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="firstName"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.firstName}</span>
                            </Grid>
                            <Grid item xs={4} style={{ paddingLeft: '1%' }}>
                                <TextField
                                    id="filled-lastName-input"
                                    label="Last Name"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="lastName"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.lastName}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-corpMailAdd-input"
                                    label="Enter Corporate Mail Address"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="corpMailAdd"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.corpMailAdd}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-setPassword-input"
                                    label="Set Password"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="setPassword"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.setPassword}</span>
                            </Grid>
                        </Grid>

                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-cnfPassword-input"
                                    label="Confirm Password"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="cnfPassword"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.cnfPassword}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-designation-input"
                                    label="Enter Designation"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="designation"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.designation}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-department-input"
                                    label="Enter Department Name"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="department"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.department}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-empCode-input"
                                    label="Enter Employee Code"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="empCode"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.empCode}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-Ofcaddress-input"
                                    label="Enter Address"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="Ofcaddress"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.Ofcaddress}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-city-input"
                                    label="Enter City"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="city"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.city}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-gstate-input"
                                    label="Enter State"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="gstate"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.gstate}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify='center'>
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-pinCode-input"
                                    label="Enter Pin Code"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="pinCode"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.pinCode}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify='center'>
                            <Grid item xs={4}>
                                <div>
                                    <TextField
                                        label="Captcha"
                                        id="filled-inputCaptcha-small"
                                        variant="filled"
                                        fullWidth={true}
                                        type="text"
                                        name="inputCaptcha"
                                        autoComplete="false"
                                        onChange={this.handleChange}
                                    />
                                    <span className="error-msg">{this.state.errors.inputCaptcha}</span>
                                </div>
                            </Grid>
                            <Grid item xs={4} style={{ paddingLeft: '10px' }} >
                                <ClientCaptcha captchaCode={this.setCode} />
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify='center'>

                            {this.state.SignUpValidation === true ? <span className='error-msg'>Please enter all fields</span> : ''}
                        </Grid>
                        <Grid container className="formContainer" justify="center">
                            <Grid item xs={5}>
                            </Grid>
                            <Grid item xs={7}>
                                <Button variant="contained" className="save-btn" size="large" onClick={this.handleLogin} style={{ width: '25%', backgroundColor: '#1E2F50', color: '#FFFFFF' }}>
                                    Signup
                                    </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        )
    }
}
export default GovernmentSignUp;