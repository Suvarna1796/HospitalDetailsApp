import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../header';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import ClientCaptcha from "react-client-captcha"
import Button from '@material-ui/core/Button';

class HospitalSignUp extends React.Component {
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
        console.log(event.target.name, event.target.value)
    }
    /*handle submit form */
    handleLogin() {
        if (this.state.hospName === undefined || this.state.contactNum === undefined ||
            this.state.licenseNumber === undefined || this.state.registartion === undefined || this.state.hospType === undefined ||
            this.state.address === undefined || this.state.city === undefined || this.state.gstate === undefined ||
            this.state.pinCode === undefined) {
            console.log("in submit", this.state.hospName, this.state.captchaCode);
            this.setState({ SignUpValidation: true });
        }
        else {
            this.setState({ SignUpValidation: false })
        }
        //captcha validation
        if (this.state.inputCaptcha) {
            this.setState({ SignUpValidation: false,CaptchaIsValid:false })
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
            case 'hospName':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ hospName: undefined });
                        this.state.errors.hospName = 'Hospital Name should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.hospName = '';
                    }
                }
                else {
                    this.setState({ hospName: '' });
                    this.state.errors.hospName = 'Required';
                }
                break;

            case 'contactNum':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^([0-9 ]+)$/)) {
                        this.setState({ contactNum: undefined });
                        this.state.errors.contactNum = 'Please enter Valid Contact Number';
                    }
                    else {
                        this.state.errors.contactNum = '';
                    }
                }
                else {
                    this.setState({ contactNum: '' });
                    this.state.errors.contactNum = 'Required';
                }
                break;

            case 'licenseNumber':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ licenseNumber: undefined });
                        this.state.errors.licenseNumber = 'License Number should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.licenseNumber = '';
                    }
                }
                else {
                    this.setState({ licenseNumber: '' });
                    this.state.errors.licenseNumber = 'Required';
                }
                break;
            case 'registartion':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ registartion: undefined });
                        this.state.errors.registartion = 'registartion should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.registartion = '';
                    }
                }
                else {
                    this.setState({ registartion: '' });
                    this.state.errors.registartion = 'Required';
                }
                break;
            case 'hospType':
                if (value === undefined && value === '' && value === null) {
                    this.setState({ hospType: '' });
                    this.state.errors.hospType = 'Required';

                }
                break;
            case 'address':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ address: undefined });
                        this.state.errors.address = 'Address should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.address = '';
                    }
                }
                else {
                    this.setState({ address: '' });
                    this.state.errors.address = 'Required';
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
                        Signup As Hospital
                        </Grid>
                </Grid>
                <div className="" style={{ paddingTop: '11px', paddingBottom: '1%' }}>
                    <Container maxWidth="md" className="boxStyle" style={{ border: '4px solid #E8E8E8' }}>
                        {/* signlkjlk */}
                        <Tabs value={this.state.value} onChange={this.handleTabChange}
                            indicatorColor="primary" textColor="primary"
                            centered style={{ paddingBottom: '7px' }}>
                            <Tab label="Login" />
                            <Tab label="Signup" />
                        </Tabs>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8} >
                                <TextField
                                    id="filled-hospName-input"
                                    label="Hospital Name"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="hospName"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.hospName}</span>
                            </Grid>

                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-contactNum-input"
                                    label="Enter Contact Number"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="contactNum"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.contactNum}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-licenseNumber-input"
                                    label="Enter License Number"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="licenseNumber"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.licenseNumber}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-registartion-input"
                                    label="Enter Registration Number"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="registartion"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.registartion}</span>
                            </Grid>
                        </Grid>

                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>

                                <select className="form-control" name="hospType" onChange={this.handleChange}>
                                    {/* <option  disabled>Choose a salutation ...</option> */}
                                    <option value="">Hospital Type</option>
                                    {/* <option disabled selected hidden>Choose Gender...</option> */}

                                    <option>Private</option>
                                    <option>Government</option>
                                    <option>Trust</option>
                                    <option>Camp</option>
                                    <option>Others</option>

                                </select>
                                <span className="error-msg">{this.state.errors.hospType}</span>
                            </Grid>
                        </Grid>

                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-address-input"
                                    label="Enter Address"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="address"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errors.address}</span>
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
export default HospitalSignUp;