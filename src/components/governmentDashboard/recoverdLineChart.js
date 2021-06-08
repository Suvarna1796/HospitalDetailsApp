import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';


const data = [{ name: '0', eth: 50 },
{ name: 'March', eth: 50 },
{ name: 'April', eth: 52 },
{ name: 'May', eth: 80 }]
const formatter = (value) => `${value}L`;

const RecoveredLineChart = () => (
    <Col md={12}  xl={6} lg={6} xs={12} >
        <Card style={{ backgroundColor: '#E4F4E8', color: "#28A745", width: '600px' }}>
            <CardBody className="dashboard__card-widget">
                <div className="card__title">
                    <h5 style={{ fontSize: '0.8rem', lineHeight: '0.8' }}>Recovered</h5>
                    <h6 style={{ fontSize: '0.7rem', lineHeight: '0.8' }}>14 May</h6>
                </div>
                <div className="dashboard__total dashboard__total--area">
                    <h4 className="dashboard__total-stat" style={{ fontSize: '0.7rem', lineHeight: '0.8' }}>
                        1,099<span style={{ fontSize: '0.5rem', fontWeight: '700' }} className="bold-text">+30</span>
                    </h4> <ResponsiveContainer height={180} className="dashboard__area">
                        <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
                            <XAxis dataKey="name" tickLine={true} stroke="#28A745" />
                            <YAxis domain={[0, 100]} tickCount={4} tickFormatter={formatter} tickLine={true} orientation="right" stroke="#28A745" />
                            <Tooltip />

                            <Area
                                name="Recovered"
                                type="monotone"
                                dataKey="eth"
                                stroke="#28A745"
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

export default RecoveredLineChart;
