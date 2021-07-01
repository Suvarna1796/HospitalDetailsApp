import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

export default class Recovered extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      recoveredTotal:0,
      confirmedArr:[]
    };
  }
  componentDidUpdate() {
    if (this.props.data) {
      if (this.props.data) {
        this.state.confirmedArr = []
        if (this.props.data.length > 0) {
          this.props.data.map((colData) => {
           return this.state.confirmedArr.push({ name: colData.State, recovered: colData.Recovered })
          })
        }
      }
      var count = this.props.data.reduce((a, b) => a + b.Recovered, 0);
      return this.setState({ recoveredTotal: count.toLocaleString() })
    }
  }
  render() {

    return (
      <Col md={12}  lg={11} xs={12}>
        <Card style={{backgroundColor:'#B3E9BE'}}>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              <h5 className="subhead">Recovered</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <p className="dashboard__total-stat">
                {this.state.recoveredTotal}
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={this.state.confirmedArr} margin={{ top: 0, left: 0, bottom: 0 }}>
                  <Tooltip />
                  <Area
                    name="recovered"
                    type="monotone"
                    dataKey="recovered"
                    fill="  #2E8B57"
                    stroke="#2E8B57"
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
