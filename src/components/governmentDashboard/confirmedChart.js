import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import TrendingDownIcon from 'mdi-react/TrendingDownIcon';
import PropTypes from 'prop-types';

const data = [{ name: 'Mon', confirmed: 70.23 },
{ name: 'Tue', confirmed: 80.5 },
{ name: 'Wed', confirmed: 38.45 },
{ name: 'Thu', confirmed: 89.2 },
{ name: 'Fri', confirmed: 105.61 },
{ name: 'Sat', confirmed: 98.6 },
{ name: 'Sun', confirmed: 115 }];

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

export default class Confirmed extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  render() {

    return (
      <Col md={12} lg={6} xs={12}>
        <Card style={{ backgroundColor: '#FFEBEF' }}>
          <CardBody className="dashboard__card-widget" >
            <div className="card__title">
              <h5 className="subhead">Confirmed</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <p className="dashboard__total-stat">
                2,15,48,498
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={data} margin={{ top: 0, left: 0, bottom: 0 }}>
                  <Tooltip content={<CustomTooltip />} />
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

