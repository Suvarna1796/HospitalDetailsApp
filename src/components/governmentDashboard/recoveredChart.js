import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import PropTypes from 'prop-types';

const data = [{ name: 'Mon', recovered: 20.23 },
  { name: 'Tue', recovered: 30.5 },
  { name: 'Wed', recovered: 2.45 },
  { name: 'Thu', recovered: 79.2 },
  { name: 'Fri', recovered: 85.61 },
  { name: 'Sat', recovered: 98.6 },
  { name: 'Sun', recovered: 115 }];

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

export default class Recovered extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const { activeIndex } = this.state;
    const activeItem = data[activeIndex];

    return (
      <Col md={12}  xl={6} lg={6} xs={12}>
        <Card style={{backgroundColor:'#B3E9BE'}}>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              {/* <h5 className="bold-text">Bch</h5> */}
              <h5 className="subhead">Recovered</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              {/* <TrendingUpIcon className="dashboard__trend-icon" /> */}
              <p className="dashboard__total-stat">
                {/* ${(activeItem.bch).toFixed(2)} */}
                1,83,06,000
              </p>
              <ResponsiveContainer height={70} className="dashboard__chart-container">
                <AreaChart data={data} margin={{ top: 0, left: 0, bottom: 0 }}>
                  <Tooltip content={<CustomTooltip />} />
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
