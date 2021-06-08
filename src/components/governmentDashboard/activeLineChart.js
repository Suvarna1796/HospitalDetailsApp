import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';


const data = [{ name: '0', eth: 0 },
{ name: 'March', eth: 2 },
{ name: 'April', eth: 3 },
{ name: 'May', eth: 7 }]
const formatter = (value) => `${value}L`;

const ActiveLineChart = () => (
  <Col md={12}  xl={6} lg={6} xs={12} >
    <Card style={{ backgroundColor: '#EFF7FF', color: "#007BFF", width: '600px' }}>
      <CardBody className="dashboard__card-widget">
        <div className="card__title">
          <h5 style={{ fontSize: '0.8rem', lineHeight: '0.8' }}>Active</h5>
          <h6 style={{ fontSize: '0.7rem', lineHeight: '0.8' }}>24 May</h6>
        </div>
        <div className="dashboard__total dashboard__total--area">
          <h4 className="dashboard__total-stat" style={{ fontSize: '0.7rem', lineHeight: '0.8' }}>
            4,40,435 <span style={{ fontSize: '0.5rem', fontWeight: '700' }} className="bold-text">-32,551</span>
          </h4> <ResponsiveContainer height={180} className="dashboard__area">
            <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
              <XAxis dataKey="name" tickLine={true} stroke="#007BFF" />
              <YAxis domain={[0, 40]} tickCount={5} tickFormatter={formatter} tickLine={true} orientation="right" stroke="#007BFF" />
              <Tooltip />

              <Area
                name="Active"
                type="monotone"
                dataKey="eth"
                stroke="#007BFF"
                strokeWidth={4}
                fillOpacity={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ActiveLineChart;
