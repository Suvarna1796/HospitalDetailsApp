import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../App.css'
import Active from './activeChart';
import Confirmed from './confirmedChart';
import Deceased from './deceasedChart';
import Recovered from './recoveredChart';
import Map from './mapChart';
import ActiveChart from './activeLineChart';
import RecoveredChart from './recoverdLineChart';
import ConfirmedChart from './confirmedLineChart';
import DeceasedChart from './deceasedLineChart';
import VacinatedChart from './vacinatedLineChart';
import TestedChart from './testedLineChart';
import TableMap from './detailTable';
import HeaderComponent from '../header'
// import { Select } from '@material-ui/core';
// import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

class CryptoDashboard extends PureComponent {
    render() {
        const { t } = this.props;
        return (
            <div>
                <HeaderComponent title='Government Dashboard' />

                <Container className="dashboard">
                    <Row>
                        <Col md={12}>
                            <h3 className="page-title">{''}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Confirmed />
                            <Active />
                            <Recovered />
                            <Deceased />
                        </Col>
                        <Col md={6}>
                            <Map />
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <Row >
                        <Row  className={"pl-0 pl-sm-0 pl-md-3 pl-lg-4 pl-xl-5"}>
                            <Col>
                                <select  style={{width:'200% ',height:'42px',border:'1px solid #DFDFDF'}} >
                                    <option>Karnataka</option>
                                    <option>Delhi</option>
                                    <option>Maharastra</option>
                                    <option>Andhra pradesh</option>
                                </select>
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
            </div>
        );
    }
}

export default CryptoDashboard;
