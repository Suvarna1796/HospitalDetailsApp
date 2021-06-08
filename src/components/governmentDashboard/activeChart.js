import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import PropTypes from 'prop-types';

const data = [{ name: 'Mon', active: 30.23 },
  { name: 'Tue', active: 40.5 },
  { name: 'Wed', active: 48.45 },
  { name: 'Thu', active: 98.2 },
  { name: 'Fri', active: 115.61 },
  { name: 'Sat', active: 60.6 },
  { name: 'Sun', active: 48 }];

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

export default class Active extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  render() {

    return (
      <Col md={12} xl={6} lg={6} xs={12}>
        <Card style={{backgroundColor:'#E5F1FF'}}>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              <h5 className="subhead">Active</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <p className="dashboard__total-stat">
                31,51,852
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={data} margin={{ top: 0, left: 0, bottom: 0 }}>
                  <Tooltip content={<CustomTooltip />} />
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
