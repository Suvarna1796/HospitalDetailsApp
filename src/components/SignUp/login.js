import React from 'react';
import ClientCaptcha from "react-client-captcha"
import "react-client-captcha/dist/index.css"
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HeaderComponent from '../header';
import FooterComponent from '../footer';
import { Card } from 'reactstrap';
import signupUserLogin, { signupGovernmentLogin } from '../../actions/signUp.actions';
import { connect } from 'react-redux';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            captchaCode: '',
            value: 0,
            CaptchaIsValid: false,
            errors: [],
            loginId: '',
            loginPwd: '',
            SignUpValidation: false,
            loginUserFlag: false,
            loginSelect: true,
            loginSelectValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleLoginSelection = this.handleLoginSelection.bind(this);
    }
    /*On select of login as user */
    handleLoginSelection(event) {
        if (event.target.value) {
            console.log(event.target.value, "in login slection");
            this.setState({ loginSelectValue: event.target.value, loginUserFlag: true, loginSelect: false });
        } else {
            this.setState({ loginSelectValue: '', loginUserFlag: false, loginSelect: true });
        }
    }

    /*On selct of signup as navigate to another page */
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
            case 'loginId':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ loginId: undefined, errorLoginId: 'Please enter valid Username' });
                    }
                    else {
                        this.setState({ errorLoginId: '' });
                    }
                }
                else {
                    this.setState({ loginId: '', errorLoginId: 'Required' });
                }
                break;
            case 'loginPwd':
                if (value !== undefined && value !== '' && value !== null) {
                    if (!value.match(/^[a-zA-Z0-9.!@#$%&_*\s,^()+=:;'-]+$/)) {
                        this.setState({ loginPwd: undefined, errorLoginPwd: 'Password should be alphanumeric and Special Character' });
                    }
                    else {
                        this.setState({ errorLoginPwd: '' })
                    }
                }
                else {
                    this.setState({ loginPwd: '', errorLoginPwd: 'Required' });
                }
                break;
            default:
                break;
        }
    }
    //submitting the form and api call
    handleLogin() {
        if (this.state.loginId === '' || this.state.loginPwd === '') {
            this.setState({ SignUpValidation: true })
        } else {
            this.setState({ SignUpValidation: false })
        }


        //captcha validation
        if (this.state.inputCaptcha) {
            this.setState({ CaptchaIsValid: false });
            if (this.state.captchaCode !== this.state.inputCaptcha) {
                this.setState({ errorLoginCaptcha: 'Please enter Valid captcha' });
            } else {
                this.setState({ CaptchaIsValid: false, errorLoginCaptcha: '' })
            }
        }
        else {
            this.setState({ errorLoginCaptcha: 'Required' });
        }

        if (this.state.loginId !== undefined && this.state.loginPwd !== undefined && (this.state.captchaCode === this.state.inputCaptcha)) {
            console.log("in login btn");
            var data = {
                "username": this.state.loginId,
                "password": this.state.loginPwd
            }
            if (this.state.loginSelectValue === "governmentUser") {
                console.log(data, "gvt ");
                this.props.dispatch(signupGovernmentLogin(data));

            }
            else if (this.state.loginSelectValue === "publicUser") {
                console.log(data, "public user");
                this.props.dispatch(signupUserLogin(data));
                console.log(this.props)
            }
            else if (this.state.loginSelectValue === "hospitalUser") {
                console.log(data, "hospitalUser user");
            }
        }
    }

    /*captcha */
    setCode = captchaCode => {
        this.setState({ captchaCode })
    }
    /*to get tab value for display*/
    handleTabChange(event, tabvalue) {
        this.setState({
            value: tabvalue,
        });
    }
    render() {
        const { value } = this.state;
        // console.log(this.props, "in render")
        if (this.props.userLogin) {
            if (this.props.userLogin.publicUserLogin) {
               return  <Redirect to='/publicDashboard1' />
            }
         if(this.props.userLogin.gvtUserLogin){
               return <Redirect to='/governmentDashboard' />
            }
        }
        return (
            <div >
                <HeaderComponent />
                {this.state.loginUserFlag === false && this.state.loginSelect === true ? <div style={{ height: '100%', width: '100%' }}>
                    <Grid container style={{ paddingTop: '18%' }} >
                        <Grid item xs={5} style={{ textAlign: 'right' }}>
                            <label className="SelectLabel" >login as </label>
                        </Grid>&emsp;
                        <Grid item  >:</Grid>&emsp;
                        <Grid item xs={4}>
                            <select className="form-control" id="publicbedsSelection" name="publicbedsSelection" onChange={this.handleLoginSelection}>
                                <option value="">Select</option>
                                <option value="governmentUser">Government Employee</option>
                                <option value="publicUser">Public User</option>
                                <option value="hospitalUser">Hospital</option>
                            </select>
                        </Grid>
                    </Grid>
                </div> : ''}


                {value === 0 && this.state.loginUserFlag === true ? <div >
                    <Grid container className="AppBody" >
                        <Grid item xs={12} style={{ textAlign: 'center', fontSize: '22px' }} fontWeight="fontWeightBold">
                            Welcome To Uoodmaish
                        </Grid>
                    </Grid>
                    <div >

                        <Grid container className="AppBody" >
                            <Grid item xs={2} >
                            </Grid>
                            <Grid item xs={8} className="LoginTabs ">
                                <Card>
                                    <br />
                                    <Tabs className="TabIndicator" TabIndicatorProps={{ style: { backgroundColor: "#1E2F50" } }} value={value} onChange={this.handleTabChange} style={{ paddingLeft: '30%' }}>
                                        <Tab label="Login" className="tab1" />
                                        <Tab label="SignUp" className="tab2" >
                                        </Tab>
                                    </Tabs>
                                    <br />

                                    <Grid container className="formContainer " justify="center" alignItems="center">
                                        <Grid item xs={6}>
                                            <TextField
                                                id="filled-loginID-input"
                                                label="Enter User Name"
                                                type="text"
                                                variant="filled"
                                                autoComplete="false"
                                                fullWidth={true}
                                                name="loginId"
                                                onChange={this.handleChange}
                                            />
                                            <span className="error-msg">{this.state.errorLoginId}</span>
                                        </Grid>
                                    </Grid>
                                    <Grid container className="formContainer" justify="center" alignItems="center">

                                        <Grid item xs={6}>
                                            <TextField
                                                id="filled-password-input"
                                                label="Enter your Password"
                                                type="password"
                                                variant="filled"
                                                autoComplete="false"
                                                fullWidth={true}
                                                name="loginPwd"
                                                onChange={this.handleChange}
                                            />
                                            <span className="error-msg">{this.state.errorLoginPwd}</span></Grid>

                                    </Grid>
                                    <Grid container style={{ paddingLeft: '25%' }}>
                                        <Link to="/" style={{ color: '#828282', fontSize: '12px', textDecoration: 'underline', paddingBottom: '20px' }}>Forgot Password</Link>
                                    </Grid>
                                    <Grid container justify="center"  >
                                        <Grid item xs={3} sm={3}>
                                            <div style={{ paddingRight: '10%' }}>
                                                <TextField
                                                    label="Captcha"
                                                    id="filled-size-small"
                                                    variant="filled"
                                                    size="small"
                                                    name="inputCaptcha"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <span className="error-msg">{this.state.errorLoginCaptcha}</span>
                                        </Grid>
                                        <Grid item xs={3} sm={3} >
                                            <ClientCaptcha captchaCode={this.setCode} height={48} />
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
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div> : <div>{value === 1 ?
                    <div style={{ height: '100%', width: '100%' }}>
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
                    </div> : ''}</div>
                }
                <FooterComponent name="login" />
            </div>
        );
    }

}


const mapStateToProps = (state) => {
        return {
        userLogin: state.PublicUserReducer,
    }
}
export default withRouter(connect(mapStateToProps)(LoginComponent));