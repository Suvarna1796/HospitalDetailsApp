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
import { signupHospital } from '../../actions/signUp.actions';
import { connect } from 'react-redux';
import { Modal, ButtonToolbar, ModalBody } from 'reactstrap';

class HospitalSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            captchaCode: '',
            SignUpValidation: false,
            errorCaptcha: '',
            errorsCnfPassword: '',
            cnfPassword: ''

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
        if (this.state.hospName === undefined || this.state.contactNum === undefined || this.state.userName === undefined ||
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
            this.setState({ SignUpValidation: false })
            if (this.state.captchaCode !== this.state.inputCaptcha) {
                this.setState({ errorCaptcha: 'Please enter valid captcha' })
            } else {
                this.setState({ errorCaptcha: '' });
            }
        }
        else {
            this.setState({ inputCaptcha: '' });
            this.setState({ errorCaptcha: 'Required' });
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
        console.log('this.state.SignUpValidation: ', this.state.SignUpValidation);
        console.log('this.state.captchaCode===this.state.inputCaptcha: ', this.state.captchaCode === this.state.inputCaptcha, this.state.captchaCode, this.state.inputCaptcha,);
        if (this.state.SignUpValidation === false && (this.state.captchaCode === this.state.inputCaptcha)&& (this.state.setPassword === this.state.cnfPassword)) {
            console.log(this.state, "submit sign in");
            var data = {
                "username": this.state.userName,
                "Hospital_Name": this.state.hospName,
                "password": this.state.setPassword,
                "Contact_Number": this.state.contactNum,
                "License_Number": this.state.licenseNumber,
                "Registration_Number": this.state.registartion,
                "Hospital_Type": this.state.hospType,
                "Address": this.state.address,
                "City": this.state.city,
                "State": this.state.gstate,
                "Pincode": this.state.pinCode
            }
            console.log(data);
            this.props.dispatch(signupHospital(data));
            this.setState({ modal: true });
        } else {
            console.log(this.state.SignUpValidation, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        }
        // {
        //     "username": "6asd74489",
        //    "Hospital_Name": "Apollo Hospitals",
        //    "password": "$2b$10$kLddqHVNgvwaBpPI6R5LauSULUB6hRrxi9Fh4eFw01tiYj3FTE7jW",
        //    "Contact_Number": 25605303,
        //    "License_Number": 45848231234545234932,
        //    "Registration_Number": 63412345987656786443,
        //    "Hospital_Type": "null",
        //    "Address": "21, Greams Lane, Off Greams Road,Chennai - 600 006",
        //    "City": "Chennai",
        //    "State": "Tamilnadu",
        //    "Pincode": 600006
        //    }

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
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ hospName: undefined, errorhospName: 'Hospital Name should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorhospName: '' });
                    }
                }
                else {
                    this.setState({ hospName: '', errorhospName: 'Required' });
                }
                break;
            case 'userName': if (value !== undefined && value !== '' && value !== null) {
                if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                    this.setState({ userName: undefined, errorsUserName: 'Please enter valid userName' });
                }
                else {
                    this.setState({ errorsUserName: '' });
                }
            }
            else {
                this.setState({ userName: '', errorsUserName: 'Required' });
            }
                break;

            case 'contactNum':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
                        this.setState({ contactNum: undefined, errorcontactNum: 'Please enter Valid Contact Number' });
                    }
                    else {
                        this.setState({ errorcontactNum: '' });
                    }
                }
                else {
                    this.setState({ contactNum: '', errorcontactNum: 'Required' });
                }
                break;

            case 'licenseNumber':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9\s]*$/)) {
                        this.setState({ licenseNumber: undefined, errorlicenseNumber: 'License Number should be Numeric' });
                    }
                    else {
                        this.setState({ errorlicenseNumber: '' });
                    }
                }
                else {
                    this.setState({ licenseNumber: '', errorlicenseNumber: 'Required' });
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
              
            case 'registartion':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9\s]*$/)) {
                        this.setState({ registartion: undefined, errorregistartion: 'Registartion should be Numeric' })
                    }
                    else {
                        this.setState({ errorregistartion: '' });
                    }
                }
                else {
                    this.setState({ registartion: '', errorregistartion: 'Required' });
                }
                break;
            case 'hospType':
                if (value === undefined && value === '' && value === null) {
                    this.setState({ hospType: '', errorsHospType: 'Required' });

                }
                break;
            case 'address':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ address: undefined, errorsAddress: 'Address should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorsAddress: '' });
                    }
                }
                else {
                    this.setState({ address: '', errorsAddress: 'Required' })
                }
                break;
            case 'city':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z ]*$/)) {
                        this.setState({ city: undefined, errorsCity: 'Please enter valid City' });
                    }
                    else {
                        this.setState({ errorsCity: '' });
                    }
                }
                else {
                    this.setState({ city: '', errorsCity: 'Required' });
                }
                break;
            case 'gstate':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z ]*$/)) {
                        this.setState({ gstate: undefined, errorsGstate: 'Please enter valid State' });
                    }
                    else {
                        this.setState({ errorsGstate: '' });
                    }
                }
                else {
                    this.setState({ gstate: '', errorsGstate: 'Required' });
                }
                break;

            case 'pinCode':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[0-9]{5,6}(?:-[0-9]{4})?$/)) {
                        this.setState({ pinCode: undefined, errorsPinCode: 'Please enter valid Pin Code ' });
                    }
                    else {
                        this.setState({ errorsPinCode: '' });
                    }
                }
                else {
                    this.setState({ pinCode: '', errorsPinCode: 'Required' });
                }
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <div>
                <div className="signUp">
                    <Header />
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
                                    <span className="error-msg">{this.state.errorhospName}</span>
                                </Grid>

                            </Grid>
                            <Grid container className="formContainer " justify="center">
                                <Grid item xs={8}>
                                    <TextField
                                        id="filled-userName-input"
                                        label="Enter User Name"
                                        type="text"
                                        variant="filled"
                                        autoComplete="false"
                                        fullWidth={true}
                                        name="userName"
                                        onChange={this.handleChange}
                                    />
                                    <span className="error-msg">{this.state.errorsUserName}</span>
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
                                    <span className="error-msg">{this.state.errorcontactNum}</span>
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
                                    <span className="error-msg">{this.state.errorlicenseNumber}</span>
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
                                    <span className="error-msg">{this.state.errorregistartion}</span>
                                </Grid>
                            </Grid>

                            <Grid container className="formContainer " justify="center">
                                <Grid item xs={8}>

                                    <select style={{ width: '100% ', height: '42px', border: '1px solid #DFDFDF' }} name="hospType" onChange={this.handleChange}>
                                        {/* <option  disabled>Choose a salutation ...</option> */}
                                        <option value="">Hospital Type</option>
                                        {/* <option disabled selected hidden>Choose Gender...</option> */}

                                        <option>Private</option>
                                        <option>Government</option>
                                        <option>Trust</option>
                                        <option>Camp</option>
                                        <option>Others</option>

                                    </select>
                                    <span className="error-msg">{this.state.errorsHospType}</span>
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
                                    <span className="error-msg">{this.state.errorsAddress}</span>
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
                                    <span className="error-msg">{this.state.errorsCity}</span>
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
                                    <span className="error-msg">{this.state.errorsGstate}</span>
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
                                    <span className="error-msg">{this.state.errorsPinCode}</span>
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
                            <Modal isOpen={this.state.modal} toggle={this.toggle} >
                            <ModalBody></ModalBody>
                            <ModalBody>
                                <div className="d-flex justify-content-center">
                                    <p>{this.props.hspUser}</p>
                                </div>
                            </ModalBody>
                            <div className="d-flex justify-content-center">
                                <ButtonToolbar className="modal__footer">
                                    <Button onClick={this.toggle}>OK</Button>
                                </ButtonToolbar>
                            </div>
                        </Modal>
                        </Container>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        hspUser: state.PublicUserReducer.hspSignUp,
    }
}
export default connect(mapStateToProps)(HospitalSignUp);