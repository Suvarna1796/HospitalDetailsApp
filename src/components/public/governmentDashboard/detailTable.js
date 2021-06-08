import React from 'react';
import TableComponent from '../Table/TableComponent';
import '../../../App.css';
import SearchBar from "material-ui-search-bar";
import { Card, CardBody } from 'reactstrap';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RestoreIcon from '@material-ui/icons/Restore';

var rows = [
  { key: 'state', label: 'State/UT' },
  { key: 'population', label: 'Population' },
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'active', label: 'Active' },
  { key: 'recovered', label: 'Recovered' },
  { key: 'deceased', label: 'Deceased' },
  { key: 'tested', label: 'Tested' },
  { key: 'vaccine', label: 'Vaccine Doses Administered' }
]

var cols = [
  { state: 'Maharastra', population: '12.2 Cr', confirmed: '48,22,902', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
  { state: 'Kerala', population: '14.2 Cr', confirmed: '46,22,342', active: '4,01,123', recovered: '45,67,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
  { state: 'Karnataka', population: '09.2 Cr', confirmed: '34,22,902', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
  { state: 'Tamil Nadu', population: '11.2 Cr', confirmed: '56,45,789', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
  { state: 'Delhi', population: '10.2 Cr', confirmed: '34,56,777', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
  { state: 'Telangana', population: '13.2 Cr', confirmed: '98,76,543', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
]
class GovernmentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewdetails: {},
      value: '',
      cols: [
        { state: 'Maharastra', population: '12.2 Cr', confirmed: '48,22,902', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
        { state: 'Kerala', population: '14.2 Cr', confirmed: '46,22,342', active: '4,01,123', recovered: '45,67,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
        { state: 'Karnataka', population: '09.2 Cr', confirmed: '34,22,902', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
        { state: 'Tamil Nadu', population: '11.2 Cr', confirmed: '56,45,789', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
        { state: 'Delhi', population: '10.2 Cr', confirmed: '34,56,777', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
        { state: 'Telangana', population: '13.2 Cr', confirmed: '98,76,543', active: '6,41,910', recovered: '41,07,092', deceased: '71,742', tested: '2.8 cr', vaccine: '1.6 cr' },
      ]
    }
    this.onCancelSearch = this.onCancelSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onCancelSearch() {
    console.log("in cancel");
    this.setState({ cols: cols })
  }
  handleChange(e) {
    console.log(e);
    this.setState({ value: e })
    const filtered = cols.filter(country => {
      console.log(this.state.value, country.state, "in map")
      return country.state.toLowerCase().includes(this.state.value.toLowerCase())
    })
    console.log(filtered);
    this.setState({ cols: filtered })

  }
  render() {
    console.log(rows, "rows in 2 render")
    return (
      <div >
        <div style={{ width: '300px' }}>
          <SearchBar placeholder="Search for date,state etc.."
            value={this.state.value} style={{ backgroundColor: '#E8E8E8', borderRadius: '25px' }}
            onChange={this.handleChange} onCancelSearch={this.onCancelSearch}
          />
        </div>
        <h6 style={{textAlign:'center'}}>12th may, 5:30pm IST <span> <NotificationsIcon /><RestoreIcon /></span></h6>
        <div>
          <Card md={12} xl={6} lg={6} xs={12}>
            <CardBody className="dashboard__card-widget" >
              <div style={{ backgroundColor: '#E8E8E8', border: '1px solid #E8E8E8' }}>
                <div className="card__title">
                  <h5 className="subhead">
                    Overall Report
                    </h5>
                </div>
              </div>
              <TableComponent id="publicTable"
                cols={this.state.cols} rows={rows}
              >
              </TableComponent>
            </CardBody>
          </Card>
        </div>

      </div>
    )
  }
}
export default GovernmentDashboard;