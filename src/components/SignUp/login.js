import React from 'react';
import ClientCaptcha from "react-client-captcha"
import "react-client-captcha/dist/index.css"
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HeaderComponent from '../header'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            captchaCode: '',
            value: 0,
            CaptchaIsValid: false,
            errors: [],
            LoginId: '',
            LoginPwd: '',
            SignUpValidation: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSelection = this.handleSelection.bind(this);

    }

    /*On selection navigate to another page */
    handleSelection(event) {
        console.log(event.target.value)
        this.props.history.push(`/${event.target.value}`);

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
            case 'LoginId':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ LoginId: undefined });
                        this.state.errors.LoginId = 'LoginId should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.LoginId = '';
                    }
                }
                else {
                    this.setState({ LoginId: '' });
                    this.state.errors.LoginId = 'Required';
                }
                break;
            case 'LoginPwd':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ LoginPwd: undefined });
                        this.state.errors.LoginPwd = 'Password should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.LoginPwd = '';
                    }
                }
                else {
                    this.setState({ LoginPwd: '' });
                    this.state.errors.LoginPwd = 'Required';
                }
                break;
        }
    }
    handleLogin() {
        //captcha validation
        if (this.state.inputCaptcha) {
            this.state.CaptchaIsValid = false;
            if (this.state.captchaCode !== this.state.inputCaptcha) {
                console.log("11111111111111111111111111111");
                this.state.errors.LoginCaptcha = 'Please enter Valid captcha';

            } else {
                this.state.errors.LoginCaptcha = '';
                this.setState({ CaptchaIsValid: false })
                console.log("222222222")
            }
        }
        else {
            this.setState({ LoginCaptcha: '' });
            this.state.errors.LoginCaptcha = 'Required';
        }
        if (this.state.LoginId === '' || this.state.LoginPwd === '') {
            this.setState({ SignUpValidation: true })
        } else {
            this.setState({ SignUpValidation: false })
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
    }
    render() {
        const { value } = this.state;
        return (
            <div >
                <HeaderComponent title='Uoodmaish' />
                {value === 0 ? <div >
                    <Grid container className="AppBody" >
                        <Grid item xs={12} style={{ textAlign: 'center', fontSize: '22px' }} fontWeight="fontWeightBold">
                            Welcome To Uoodmaish
                        </Grid>
                    </Grid>
                    <div >

                        <Grid container className="AppBody" >
                            <Grid item xs={3} >
                            </Grid>
                            <Grid item xs={6} className="LoginTabs boxStyle" >
                                <br />
                                <Tabs className="TabIndicator" value={value} onChange={this.handleTabChange} style={{ paddingLeft: '35%' }}>
                                    <Tab label="Login" className="tab1" />
                                    <Tab label="SignUp" className="tab2" >
                                    </Tab>
                                </Tabs>
                                <br />

                                <Grid container className="formContainer " justify="center" alignItems="center">
                                    <Grid item xs={6}>
                                        <TextField
                                            id="filled-loginID-input"
                                            label="Enter Login ID"
                                            type="text"
                                            variant="filled"
                                            autoComplete="false"
                                            fullWidth={true}
                                            name="LoginId"
                                            onChange={this.handleChange}
                                        />
                                        <span className="error-msg">{this.state.errors.LoginId}</span>
                                    </Grid>

                                </Grid>
                                <br />
                                <Grid container className="formContainer" justify="center" alignItems="center">

                                    <Grid item xs={6}>
                                        <TextField
                                            id="filled-password-input"
                                            label="Enter your Password"
                                            type="password"
                                            variant="filled"
                                            autoComplete="false"
                                            fullWidth={true}
                                            name="LoginPwd"
                                            onChange={this.handleChange}
                                        />
                                        <span className="error-msg">{this.state.errors.LoginPwd}</span></Grid>

                                </Grid>
                                <Grid container style={{ paddingLeft: '25%' }}>
                                    <Link to="/" style={{ color: '#828282', fontSize: '12px', textDecoration: 'underline', paddingBottom: '20px' }}>Forgot Password</Link>
                                </Grid>
                                <Grid container justify="center"  >
                                    <Grid item xs={3} sm={3}>
                                        <div>
                                            <TextField
                                                label="Captcha"
                                                id="filled-size-small"
                                                variant="filled"
                                                size="small"
                                                name="inputCaptcha"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                            <span className="error-msg">{this.state.errors.LoginCaptcha}</span>
                                    </Grid>
                                    <Grid item xs={3} sm={3} >
                                        <ClientCaptcha captchaCode={this.setCode} />
                                    </Grid>

                                </Grid>
                                <br />
                                <Grid container className="formContainer " justify='center'>

                                    {this.state.SignUpValidation === true ? <span className='error-msg'>Please enter all fields</span> : ''}
                                </Grid>
                                <Grid container justify="center" alignItems="center">
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={4} >
                                        <Button variant="contained" className="save-btn" size="large" onClick={this.handleLogin} style={{ width: '50%', backgroundColor: '#1E2F50', color: '#FFFFFF' }}>
                                            Login
                                    </Button>
                                    </Grid>
                                </Grid>
                                <br />
                            </Grid>
                        </Grid>
                    </div>
                </div> :
                    <Grid container style={{ paddingTop: '18%' }} >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >signup as </label>
                        </Grid>&emsp;
                 <Grid item  >:</Grid>&emsp;
                 <Grid item xs={4}>
                            <select className="form-control" id="publicbedsSelection" name="publicbedsSelection" onChange={this.handleSelection}>
                                <option >Select</option>

                                <option value="governmentSignUp">Government Employee</option>
                                <option value="publicUserSignUp">Public User</option>
                                <option value="hospitalSignUp">Hospital</option>
                            </select>
                        </Grid>
                    </Grid>
                }
            </div>
        );
    }

}

export default LoginComponent