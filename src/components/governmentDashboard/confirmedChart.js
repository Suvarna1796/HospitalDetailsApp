import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

export default class Confirmed extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      confirmedTotal: 0,
      confirmedArr:[]
    };
  }

  componentDidUpdate() {
    if (this.props.data) {
      if (this.props.data) {
        this.state.confirmedArr = []
        if (this.props.data.length > 0) {
          this.props.data.map((colData) => {
           return this.state.confirmedArr.push({ name: colData.State, confirmed: colData.Confirmed })
          })
        }
      }
      var count = this.props.data.reduce((a, b) => a + b.Confirmed, 0);
      return this.setState({ confirmedTotal: count.toLocaleString() })
    }
  }

  render() {
    return (
      <Col md={12} lg={11} xs={12}>
        <Card style={{ backgroundColor: '#FFEBEF' }}>
          <CardBody className="dashboard__card-widget" >
            <div className="card__title">
              <h5 className="subhead">Confirmed</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <p className="dashboard__total-stat">
                {this.state.confirmedTotal}
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={this.state.confirmedArr} margin={{ top: 0, left: 0, bottom: 0 }}>
                  {/* <Tooltip content={<CustomTooltip />} /> */}
                  <Tooltip />
                  <Area
                    name="confirmed"
                    type="monotone"
                    dataKey="confirmed"
                    fill="#F6798D"
                    stroke="#F6798D"
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

