import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../App.css'
import Active from './activeChart';
import Confirmed from './confirmedChart';
import Deceased from './deceasedChart';
import Recovered from './recoveredChart';
import Map from './map/App';
import ActiveChart from './activeLineChart';
import RecoveredChart from './recoverdLineChart';
import ConfirmedChart from './confirmedLineChart';
import DeceasedChart from './deceasedLineChart';
import VacinatedChart from './vacinatedLineChart';
import TestedChart from './testedLineChart';
import TableMap from './detailTable';
import HeaderComponent from '../header';
import FooterComponent from '../footer';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import TimerIcon from '@material-ui/icons/Timer';
import TextField from '@material-ui/core/TextField';
import { gvtUsergetList } from '../../actions/signUp.actions';
import { connect } from 'react-redux';
// import { BsArrow90DegLeft } from "react-icons/bs";
class MapIndexComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            admissionDatevalue: new Date(),
            // timeStartvalue:()
            // label: 'Now',
            timeStartvalue: new Date(),
            value: new Date(),
            timeDisplay: false,
            areaDisplay: false,
            deathRateDisplay: false,
            pinCodeDisplay: false,
            densityDisplay: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.admissionDate = this.admissionDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleList = this.handleList.bind(this);
    }
    handleList(event) {
        if (event.target.dataset.user === 'time') {
            // console.log(event.target.dataset.user, "li valuesssssssssssssssssss");
            this.setState({ timeDisplay: true, areaDisplay: false, deathRateDisplay: false, densityDisplay: false, pinCodeDisplay: false })
        }
        else if (event.target.dataset.user === 'area') {
            this.setState({ areaDisplay: true, timeDisplay: false, deathRateDisplay: false, densityDisplay: false, pinCodeDisplay: false })
        }
        else if (event.target.dataset.user === 'deathRate') {
            this.setState({ deathRateDisplay: true, areaDisplay: false, timeDisplay: false, densityDisplay: false, pinCodeDisplay: false })
        }
        else if (event.target.dataset.user === 'density') {
            this.setState({ densityDisplay: true, pinCodeDisplay: false, deathRateDisplay: false, areaDisplay: false, timeDisplay: false })
        }
        else if (event.target.dataset.user === 'pinCode') {
            this.setState({ pinCodeDisplay: true, densityDisplay: false, deathRateDisplay: false, areaDisplay: false, timeDisplay: false })
        }
        //,
    }
    handleTime(value) {
        this.setState({ timeStartvalue: value })

    }
    admissionDate(value) {
        this.setState({ admissionDatevalue: value })
    }
    handleChange(e) {
        console.log(e, "handle change")
    }
    handleTimeChange = (event) => {
        console.log("change: " + event.target.value);
        this.setState({
            value: event.target.value,
            //   events: logs.slice()
        });
    };
    componentDidMount() {
        // this.props.dispatch(gvtUsergetList);
    }
    render() {
        return (
            <div className="mapClass">
                <HeaderComponent />

                <Container >
                    <Row>
                        <Col md={12}>

                            {this.state.timeDisplay === true ? <Container className='mt-3'>
                                <Grid container >
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <label >Date</label>
                                        </div>
                                        <DatePicker
                                            onChange={this.admissionDate}
                                            clearIcon={null}
                                            value={this.state.admissionDatevalue}
                                        />
                                    </Grid>
                                    <Grid item xs={3} align="right">
                                        <div>
                                            <label  >Time</label>
                                        </div>
                                        <TimePicker
                                            onChange={this.handleTime}
                                            value={this.state.timeStartvalue}
                                            clearIcon={null}
                                            format="h:mm:ss a"
                                            amPmAriaLabel={'Select AM/PM'}
                                            clockIcon={<TimerIcon />}
                                        />
                                    </Grid>
                                    <Grid item xs={1} align="center" className="mt-4"><div>to</div></Grid>
                                    <Grid item xs={3} className="pt-4">
                                        <TimePicker
                                            onChange={this.handleTime}
                                            value={this.state.timeStartvalue}
                                            clearIcon={null}
                                            format="h:mm:ss a"
                                            amPmAriaLabel={'AM/PM'}
                                            clockIcon={<TimerIcon />}
                                        />
                                    </Grid>
                                </Grid>
                            </Container> : ''}
                            {this.state.pinCodeDisplay === true ? <Container className='mt-3'>
                                <Grid container >
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <label >Pincode</label>
                                        </div>
                                        <TextField
                                            id="filled-pinCode-input"
                                            placeholder="Pincode"
                                            type="text"
                                            variant="filled"
                                            autoComplete="false"
                                            fullWidth={true}
                                            name="pinCode"
                                        />
                                    </Grid>
                                </Grid>
                            </Container> : ''}
                            {this.state.densityDisplay === true ? <Container className='mt-3'>
                                <Grid container >
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <label >Density</label>
                                        </div>
                                        <select style={{ width: '100% ', height: '42px', border: '1px solid #DFDFDF' }}>
                                            <option>Low to High</option>
                                            <option>High to Low</option>
                                        </select>
                                    </Grid>
                                </Grid>
                            </Container> : ''}
                            {this.state.areaDisplay === true ? <Container className='mt-3'>
                                <Grid container >
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <label >Area</label>
                                        </div>
                                        {/* <input type="text"></input> */}
                                        <TextField
                                            id="filled-area-input"
                                            type="text"
                                            variant="filled"
                                            autoComplete="false"
                                            fullWidth={true}
                                            name="area"
                                        />
                                    </Grid>
                                </Grid>
                            </Container> : ''}
                            {this.state.deathRateDisplay === true ?
                                <Container className='mt-3'>
                                    <Grid container >
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={3}>
                                            <div>
                                                <label>Death Rate</label>
                                            </div>
                                            <select style={{ width: '100% ', height: '42px', border: '1px solid #DFDFDF' }}>
                                                <option>Low to High</option>
                                                <option>High to Low</option>
                                            </select>
                                        </Grid>
                                    </Grid>
                                </Container> : ''}

                        </Col>
                    </Row>
                    <Row className="dashboard">
                        <Row >

                            <Accordion onChange={this.handleChange('panel1')} className="mapAccordian" style={(this.state.timeDisplay === true || this.state.pinCodeDisplay === true || this.state.densityDisplay === true || this.state.areaDisplay === true || this.state.deathRateDisplay === true) ? { top: '-7%' } : {}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography >Sort By</Typography>
                                </AccordionSummary>
                                <AccordionDetails id="example">
                                    <ul >
                                        <li onClick={this.handleList} data-user="time">
                                            Time
                                            </li>
                                        <li onClick={this.handleList} data-user="pinCode" >
                                            Pincode
                                            </li>
                                        <li onClick={this.handleList} data-user="density" >
                                            Density
                                            </li>
                                        <li onClick={this.handleList} data-user="area" >
                                            Area
                                            </li>
                                        <li onClick={this.handleList} data-user="deathRate">
                                            Death Rate
                                            </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                        </Row>

                        <Col md={5} className='mt-3'>
                            <Container>
                                <Confirmed />
                                <Active />
                                <Recovered />
                                <Deceased />
                            </Container>
                        </Col>
                        <Col md={6}>
                           
                         <Map />
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <Row className="dashboard">
                        <Row className={"pl-0 pl-sm-0 pl-md-3 pl-lg-4 pl-xl-5"}>
                            <Col>
                                {/* <div style={{ display: 'flex' }}> */}
                                    <select style={{ width: '200% ', height: '42px', border: '1px solid #DFDFDF' }} >
                                        <option>Karnataka</option>
                                        <option>Delhi</option>
                                        <option>Maharastra</option>
                                        <option>Andhra pradesh</option>
                                    </select>
                                    {/* <div style={{ flexGrow: " 1",paddingBottom:'0px',justiftyContent:"center", alignItems:"center" }}><BsArrow90DegLeft style={{verticalAlign: 'middle'}} /></div> */}
                                {/* </div> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5} >
                                <ConfirmedChart />
                                <ActiveChart />
                                <RecoveredChart />
                            </Col>
                            <Col md={2}></Col>
                            <Col md={5}>
                                <TestedChart />
                                <VacinatedChart />
                                <DeceasedChart />
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <hr />
                    <Row >
                        <Col  >
                            <TableMap />
                        </Col>

                    </Row>
                </Container>
                <Container></Container>
                <FooterComponent />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        publicUser: state.PublicUserReducer.gvtUserdata,
    }
}
export default connect(mapStateToProps)(MapIndexComponent);