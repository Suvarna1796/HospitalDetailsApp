import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../../App.css'
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
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">{'charts'}</h3>
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
                    {/* <Col >
                        <select >
                            <option>Karnataka</option>
                            <option>Delhi</option>
                            <option>Maharastra</option>
                            <option>Andhra pradesh</option>
                        </select></Col> */}

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
                <br />
                <hr />
                <Row >
                    <Col  >
                        <TableMap />
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default CryptoDashboard;
