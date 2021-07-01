import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import PropTypes from 'prop-types';

export default class Deceased extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      deathTotal:0,
      confirmedArr:[]
    };
  }
  componentDidUpdate() {
    if (this.props.data) {
      if (this.props.data) {
        this.state.confirmedArr = []
        if (this.props.data.length > 0) {
          this.props.data.map((colData) => {
           return this.state.confirmedArr.push({ name: colData.State, deceased: colData.Deaths })
          })
        }
      }
      var count = this.props.data.reduce((a, b) => a + b.Deaths, 0);
      return this.setState({ deathTotal: count.toLocaleString() })
    }
  }

  render() {

    return (
      <Col md={12}  lg={11} xs={12}>
        <Card style={{backgroundColor:'#F1F1F1'}}>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              <h5 className="subhead">Deceased</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <p className="dashboard__total-stat">
                {this.state.deathTotal}
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={this.state.confirmedArr} margin={{ top: 0, left: 0, bottom: 0 }}>
                  <Tooltip  />
                  <Area
                    name="deceased"
                    type="monotone"
                    dataKey="deceased"
                    fill="#A7A9AE"
                    stroke="#A7A9AE"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
