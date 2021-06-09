import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../header';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import ClientCaptcha from "react-client-captcha"
import Button from '@material-ui/core/Button';
import FooterComponent from '../footer';

class PublicUserSignUp extends React.Component {
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
        if (this.state.firstName === undefined || this.state.lastName === undefined || this.state.mobileNumber === undefined ||
            this.state.mailAdd === undefined || this.state.setPassword === undefined || this.state.cnfPassword === undefined ||
            this.state.address === undefined || this.state.city === undefined || this.state.gstate === undefined ||
            this.state.pinCode === undefined) {
            console.log("in submit", this.state.firstName, this.state.captchaCode);
            this.setState({ SignUpValidation: true });
        }
        else {
            this.setState({ SignUpValidation: false })
        }
        //captcha validation
        if (this.state.inputCaptcha) {
            this.setState({ CaptchaIsValid: false });
            if (this.state.captchaCode !== this.state.inputCaptcha) {
                this.setState({ errorCaptcha: 'Please enter valid captcha' })
            } else {
                this.setState({ CaptchaIsValid: false, errorCaptcha: '' })
            }
        }
        else {
            this.setState({ inputCaptcha: '', errorCaptcha: 'Required' });
        }

        //password validation
        if (this.state.setPassword && this.state.cnfPassword) {
            if (this.state.setPassword === this.state.cnfPassword) {
                this.setState({ errorsCnfPassword: '' });

            }
            else {
                this.setState({ errorsCnfPassword: 'Passwords do not match' });
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
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ firstName: undefined, errorsFirstName: 'First Name should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorsFirstName: '' });
                    }
                }
                else {
                    this.setState({ firstName: '', errorsFirstName: 'Required' });
                }
                break;
            case 'lastName':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ lastName: undefined, errorLastName: 'Last Name should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorLastName: '' });
                    }
                }
                else {
                    this.setState({ lastName: '', errorLastName: 'Required' });
                }
                break;
            case 'mobileNumber':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
                        this.setState({ mobileNumber: undefined, errorMobileNumber: 'Please enter Valid Mobile Number' });
                    }
                    else {
                        this.setState({ errorMobileNumber: '' });
                    }
                }
                else {
                    this.setState({ mobileNumber: '', errorMobileNumber: 'Required' });
                }
                break;

            case 'mailAdd':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9._%/+*-]+@[a-zA-Z0-9]+\.([a-zA-Z]{2,5}|[a-zA-z]{2,5}\.[a-zA-Z]{2,5})$/)) {
                        this.setState({ mailAdd: undefined, errorsMailAdd: 'Please enter valid mail address' });
                    }
                    else {
                        this.setState({ errorsMailAdd: '' });
                    }
                }
                else {
                    this.setState({ mailAdd: '', errorsMailAdd: 'Required' });
                }
                break;
            case 'setPassword':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ setPassword: undefined, errorSetPassword: 'Set Password should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorSetPassword: '' });
                    }
                }
                else {
                    this.setState({ setPassword: '', errorSetPassword: 'Required' });
                }
                break;

            case 'cnfPassword':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ cnfPassword: undefined, errorsCnfPassword: 'Confirm Password should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorsCnfPassword: '' });
                    }
                }
                else {
                    this.setState({ cnfPassword: '', errorsCnfPassword: 'Required' });
                }
                break;
            case 'address':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ address: undefined, errorAddress: 'Address should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorAddress: '' });
                    }
                }
                else {
                    this.setState({ address: '', errorAddress: 'Required' });
                }
                break;
            case 'city':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z ]*$/)) {
                        this.setState({ city: undefined, errorCity: 'Please enter valid City' });
                    }
                    else {
                        this.setState({ errorCity: '' });
                    }
                }
                else {
                    this.setState({ city: '', errorCity: 'Required' });
                }
                break;
            case 'gstate':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z ]*$/)) {
                        this.setState({ gstate: undefined, errorGstate: 'Please enter valid State' })
                    }
                    else {
                        this.setState({ errorGstate: '' });
                    }
                }
                else {
                    this.setState({ gstate: '', errorGstate: 'Required' });
                }
                break;

            case 'pinCode':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]{5}(?:-[0-9]{4})?$/)) {
                        this.setState({ pinCode: undefined, errorPinCode: 'Please enter valid Pin Code ' });
                    }
                    else {
                        this.setState({ errorPinCode: '' });
                    }
                }
                else {
                    this.setState({ pinCode: '', errorPinCode: 'Required' });
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="signUp">
                <Header  />
                <Grid container className="AppBody" >
                    <Grid item xs={12} style={{ textAlign: 'center', fontSize: '22px' }} fontWeight="fontWeightBold">
                        Signup As Public User
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
                                <span className="error-msg">{this.state.errorsFirstName}</span>
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
                                <span className="error-msg">{this.state.errorLastName}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-mobileNumber-input"
                                    label="Enter Mobile Number"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="mobileNumber"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errorMobileNumber}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-mailAdd-input"
                                    label="Enter Mail Address"
                                    type="text"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="mailAdd"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errorsMailAdd}</span>
                            </Grid>
                        </Grid>
                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-setPassword-input"
                                    label="Set Password"
                                    type="password"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="setPassword"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errorSetPassword}</span>
                            </Grid>
                        </Grid>

                        <Grid container className="formContainer " justify="center">
                            <Grid item xs={8}>
                                <TextField
                                    id="filled-cnfPassword-input"
                                    label="Confirm Password"
                                    type="password"
                                    variant="filled"
                                    autoComplete="false"
                                    fullWidth={true}
                                    name="cnfPassword"
                                    onChange={this.handleChange}
                                />
                                <span className="error-msg">{this.state.errorsCnfPassword}</span>
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
                                <span className="error-msg">{this.state.errorAddress}</span>
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
                                <span className="error-msg">{this.state.errorCity}</span>
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
                                <span className="error-msg">{this.state.errorGstate}</span>
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
                                <span className="error-msg">{this.state.errorPinCode}</span>
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
                                    <span className="error-msg">{this.state.errorCaptcha}</span>
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
                <FooterComponent />
            </div>
        )
    }
}
export default PublicUserSignUp;