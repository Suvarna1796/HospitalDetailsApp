import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import '../../App.css';
import HeaderComponent from '../header';
import FooterComponent from '../footer';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { publicUsergetList } from '../../actions/signUp.actions';
import { connect } from 'react-redux';
import { Modal, ButtonToolbar, ModalBody } from 'reactstrap';

var locationPosition;

class PublicDashboard1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationFlag: false, checkboxValue: false, modalFlag: false
        }
        this.detectLocation = this.detectLocation.bind(this);
        this.setCheckboxValue = this.setCheckboxValue.bind(this);
    }
    setCheckboxValue() {
        this.setState({ checkboxValue: !this.state.checkboxValue, locationFlag: false })
    }
    detectLocation() {
        if (this.state.checkboxValue === true) {
            this.setState({ locationFlag: false });

        } else {
            this.setState({ locationFlag: true })
        }
    }
    componentDidMount() {
        this.props.dispatch(publicUsergetList);
        localStorage.setItem('user', 'public')
    }

    render() {
        return (
            <div>
                <HeaderComponent />

                <Grid container className="AppBody" >
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={8}>
                        <Container maxWidth="md" >
                            {/* <label className="SelectLabel" className="SelectLabel">Enter your Country</label>
                    <NativeSelect fullWidth={true} >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect> */}
                            <label className="SelectLabel" >Enter your Country</label>
                            <select className="form-control" id="publicCountrySelection" name="publicCountrySelection" >
                                <option>India</option>
                                <option>USA</option>
                                <option>UK</option>
                                <option>China</option>
                                <option>Japan</option>
                            </select>
                            <br />
                            <label className="SelectLabel">Enter your State</label>
                            <select className="form-control" id="publicStateSelection" name="publicStateSelection">
                                <option>Karnataka</option>
                                <option>Andhra Pradesh</option>
                                <option>Maharastra</option>
                                <option>Tamil Nadu</option>
                                <option>Delhi</option>
                            </select>
                            <br />
                            <label className="SelectLabel" >Enter your District</label>
                            <select className="form-control" id="publicDistrictSelection" name="publicDistrictSelection">
                                <option>Banglore</option>
                                <option>Manglore</option>
                                <option>Ballari </option>
                                <option>Bidar</option>
                                <option>Chikballapur</option>
                            </select>
                            <br />
                            <label className="SelectLabel">Enter your Area</label>
                            <select className="form-control" id="publicAreaSelection" name="publicAreaSelection">
                                <option>Yeswanthpur</option>
                                <option>Jayanagar</option>
                                <option>Uttarahalli </option>
                                <option>Kumaraswamy</option>
                                <option>Girinagar</option>
                            </select>
                            <br />
                            <label className="SelectLabel">Enter your Ward/Sector/Landmark</label>
                            <select className="form-control" id="publicWardSelection" name="publicWardSelection">
                                <option>Sector 6 </option>
                                <option>Sector 1</option>
                                <option>Sector 5 </option>
                                <option>Sector 4</option>
                                <option>Sector 3</option>
                            </select>
                            <br />
                            <Grid container>
                                <Grid item xs={5}>
                                    <input
                                        checked={this.state.checkboxValue}
                                        onChange={this.setCheckboxValue}
                                        type="checkbox"
                                    />&nbsp;
                                    <label>
                                        search for nearby hospitals
                                    </label>
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item xs={7} style={{ color: '#878787' }}>
                                    OR
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item xs={9}>
                                    <Button className="tableBtn" onClick={this.detectLocation} >
                                        <MyLocationIcon /> &nbsp;Detect Location
                                    </Button>
                                </Grid>
                            </Grid>
                            {this.state.locationFlag === true ?
                                <Grid container justify="center">
                                    <Grid item xs={11}>
                                        <DetectLocationComponent />
                                    </Grid>
                                </Grid> : ''}
                            <Grid container style={{ paddingTop: '2%' }} justify="center">
                                <Grid item xs={1}>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button style={{ backgroundColor: "#BCA231", color: "#fff", textTransform: 'none' }}>
                                        <Link to="/publicDashboard2" style={{ color: '#fff', textDecoration: "none" }}>  Search For Hospitals</Link></Button>
                                </Grid>
                                <Grid item xs>
                                </Grid>
                            </Grid>
                            {/* <div className="row">
                        <div className="col-3"></div>
                        <div className="col-9">
                            <Button style={{ backgroundColor: "#BCA231", color: "#fff", textTransform: 'none' }}>
                            <Link to="/publicDashboard" style={{ color: '#fff', textDecoration: "none" }}>  Search For Hospitals</Link></Button>
                            </div>
                    </div> */}
                        </Container>
                    </Grid>

                </Grid >
                <FooterComponent history={this.props.history} />
                <Modal isOpen={this.state.modalFlag} >
                    <ModalBody></ModalBody>
                    <ModalBody>
                        <div className="d-flex justify-content-center">
                            <p>Please Login to continue</p>
                        </div>
                    </ModalBody>
                    <div className="d-flex justify-content-center" style={{ paddingBottom: '3%' }}>
                        <ButtonToolbar className="modal__footer">
                            <Link to='/'><Button onClick={this.toggle}>Yes</Button></Link>
                            <Link to='/'><Button onClick={this.toggle}>No</Button></Link>
                        </ButtonToolbar>
                    </div>
                </Modal>
            </div>

        )
    }
}
class DetectLocationComponent extends React.Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(locationPosition, "locationPosition in mount ")
            console.log("position", position)
            locationPosition = position;
            console.log(locationPosition, "after assign in mount")
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }
    render() {
        console.log(locationPosition, "render")
        return (
            <div>{locationPosition ? '' : <div>Please allow the location access,to get your location</div>}</div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicUser: state.PublicUserReducer.publicUserdata,
    }
}
export default connect(mapStateToProps)(PublicDashboard1);