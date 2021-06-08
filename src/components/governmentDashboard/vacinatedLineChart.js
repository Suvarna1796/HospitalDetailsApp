import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';


const data = [{ name: '0', eth: 10 },
{ name: 'March', eth: 10 },
{ name: 'April', eth: 25 },
{ name: 'May', eth: 65 }]
const formatter = (value) => `${value}L`;

const VaccinatedLineChart = () => (
    <Col md={12}  xl={6} lg={6} xs={12} >
        <Card style={{ backgroundColor: '#FAEAEF', color: "#E17195", width: '600px' }}>
            <CardBody className="dashboard__card-widget">
                <div className="card__title">
                    <h5 style={{ fontSize: '0.8rem', lineHeight: '0.8' }}>Vaccine doses administered</h5>
                    <h6 style={{ fontSize: '0.7rem', lineHeight: '0.8' }}>24 May</h6>
                </div>
                <div className="dashboard__total dashboard__total--area">
                    <h4 className="dashboard__total-stat" style={{ fontSize: '0.7rem', lineHeight: '0.8' }}>
                        2,48,835<span style={{ fontSize: '0.5rem', fontWeight: '700' }} className="bold-text">+2,803</span>
                    </h4> <ResponsiveContainer height={180} className="dashboard__area">
                        <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
                            <XAxis dataKey="name" tickLine={true} stroke="#E17195" />
                            <YAxis domain={[0, 100]} tickCount={6} tickFormatter={formatter} tickLine={true} orientation="right" stroke="#E17195" />
                            <Tooltip />

                            <Area
                                name="Tested"
                                type="monotone"
                                dataKey="eth"
                                stroke="#E17195"
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

export default VaccinatedLineChart;
