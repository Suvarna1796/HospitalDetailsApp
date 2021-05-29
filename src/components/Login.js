import React from 'react';
import ClientCaptcha from "react-client-captcha"
import "react-client-captcha/dist/index.css"
import '../App.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import SignUpComponent from './SignUp.js'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            captchaCode: '',
            value: 0,
            LoginIsValid: false,
            PwdIsValid: false,
            CaptchaIsValid: false,
            errors: [],
            LoginId: '',
            LoginPwd: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

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
                        this.setState({ LoginIsValid: false });
                        this.state.errors.LoginId = 'LoginId should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.LoginId = '';
                        this.setState({ LoginIsValid: true });
                    }
                }
                else {
                    this.setState({ LoginId: '' });
                    this.setState({ LoginIsValid: false });
                    this.state.errors.LoginId = 'Required';
                }
                break;
            case 'LoginPwd':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'\/-]+$/)) {
                        this.setState({ LoginPwd: undefined });
                        this.setState({ PwdIsValid: false });
                        this.state.errors.LoginPwd = 'Password should be alphanumeric and Special Character';
                    }
                    else {
                        this.state.errors.LoginPwd = '';
                        this.setState({ PwdIsValid: true });
                    }
                }
                else {
                    this.setState({ LoginPwd: '' });
                    this.setState({ PwdIsValid: false });
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
                this.setState({ LoginCaptcha: undefined });
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
                <div>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <FingerprintIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Uoodmaish
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
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
                            <Grid item xs={6} className="LoginTabs" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
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
                                            <span className="error-msg">{this.state.errors.LoginCaptcha}</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3} sm={3} >
                                        <ClientCaptcha captchaCode={this.setCode} />
                                    </Grid>

                                </Grid>
                                <br />

                                <Grid container justify="center" alignItems="center">
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={4} >
                                        <Button variant="contained" className="save-btn" size="large" onClick={this.handleLogin} disabled={!(this.state.LoginIsValid && this.state.PwdIsValid)} style={{ width: '50%', backgroundColor: '#1E2F50', color: '#FFFFFF' }}>
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
                            <select className="form-control" id="publicbedsSelection" name="publicbedsSelection" >
                                <option>Government Employee</option>
                                <option>Public User</option>
                                <option>Hospital</option>
                            </select>
                        </Grid>
                    </Grid>
                }
            </div>
        );
    }

}

export default LoginComponent