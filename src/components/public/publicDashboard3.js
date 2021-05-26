import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Button from '@material-ui/core/Button';
import '../../App.css';

class PublicDashboard3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, tabvalue) {
        console.log(tabvalue);
        console.log(this.state.value);
        this.setState({
            value: tabvalue,
        });
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                < Tabs className="TabIndicator" centered value={value} onChange={this.handleChange} >

                        <Tab label="Basic Details" className="tab1" style={{ textTransform: 'none' }} />
                    
                        <Tab className="tab2" label="Real Time Details" style={{ textTransform: 'none' }} />
                </Tabs >

               
            </div>
        )
    }
}
export default PublicDashboard3


