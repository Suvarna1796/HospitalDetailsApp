import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
var confirmedArr = []
export default class Active extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      activeTotal: 0,

    };
  }
  componentDidUpdate() {
    if (this.props.data) {
      if (this.props.data) {
        confirmedArr = []
        if (this.props.data.length > 0) {
          this.props.data.map((colData) => {
            return confirmedArr.push({ name: colData.State, active: colData.Active })
          })
        }
      }
      var count = this.props.data.reduce((a, b) => a + b.Active, 0);
      return this.setState({ activeTotal: count.toLocaleString() })
    }
  }
  render() {

    return (
      <Col md={12} lg={11} xs={12}>
        <Card style={{ backgroundColor: '#E5F1FF' }}>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              <h5 className="subhead">Active</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <p className="dashboard__total-stat">
                {this.state.activeTotal}
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={confirmedArr} margin={{ top: 0, left: 0, bottom: 0 }}>
                  {/* <Tooltip content={<CustomTooltip />} /> */}
                  <Tooltip />
                  <Area
                    name="active"
                    type="monotone"
                    dataKey="active"
                    fill="#6faae1"
                    stroke="#6faae1"
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
