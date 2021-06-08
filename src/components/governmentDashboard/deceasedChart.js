import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import PropTypes from 'prop-types';

const data = [{ name: 'Mon', deceased: 65.23 },
  { name: 'Tue', deceased: 90.5 },
  { name: 'Wed', deceased: 75.45 },
  { name: 'Thu', deceased: 103.2 },
  { name: 'Fri', deceased: 85.61 },
  { name: 'Sat', deceased: 98.6 },
  { name: 'Sun', deceased: 115 }];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="dashboard__total-tooltip">
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
  })),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: null,
};

export default class Deceased extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  render() {

    return (
      <Col md={12} xl={6} lg={6} xs={12}>
        <Card style={{backgroundColor:'#F1F1F1'}}>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              <h5 className="subhead">Deceased</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <p className="dashboard__total-stat">
                90,646
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={data} margin={{ top: 0, left: 0, bottom: 0 }}>
                  <Tooltip content={<CustomTooltip />} />
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
