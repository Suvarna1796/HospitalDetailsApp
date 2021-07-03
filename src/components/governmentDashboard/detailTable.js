import React from 'react';
import TableComponent from '../Table/TableComponent';
import '../../App.css';
import SearchBar from "material-ui-search-bar";
import { Card } from 'reactstrap';
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
var arr = []
class GovernmentDashboardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewdetails: {},
      value: '',
      cols: []
    }
    this.onCancelSearch = this.onCancelSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onCancelSearch() {
    console.log("in cancel");
    console.log('arr: ', arr);
    this.setState({ cols: arr })
  }
  handleChange(e) {
    console.log(e);
    this.setState({ value: e })
    const filtered = arr.filter(country => {
      console.log(this.state.value, country.state, "in map")
      return country.state.toLowerCase().includes(this.state.value.toLowerCase())
    })
    console.log(filtered);
    this.setState({ cols: filtered });
    arr = filtered;
  }

  shouldComponentUpdate(nextProps) {
    console.log('this.props.data: ', nextProps);
    if (nextProps.data) {
      arr = []
      if (nextProps.data.length > 0) {
        console.log('this.props.data: ', nextProps.data);
        nextProps.data.map((colData) => {
          return arr.push({
            state: colData.State, population: colData.Population, confirmed: colData.Confirmed, active: colData.Active, recovered: colData.Recovered, deceased: colData.Deaths, tested: colData.Tested, vaccine: colData.Tested
          })
        })
        console.log(arr);
        this.state.cols = arr;
      }
    }
    return true
  }
  render() {
    console.log(rows, "rows in 2 render")
    console.log(this.props.data, this.state.cols, "state,props")
    return (
      <div >
        <div style={{ width: '300px', paddingBottom: '10px' }}>
          <SearchBar placeholder="Search for date,state etc.."
            value={this.state.value} style={{ backgroundColor: '#E8E8E8' }}
            onChange={this.handleChange} onCancelSearch={this.onCancelSearch}
          />
        </div>
        <div style={{ display: "flex", textAlign: 'center', alignItems: 'center', justifyContent: 'center', paddingBottom: '10px' }}>
          <h5 >12th may, 5:30pm IST</h5>
          <span> <NotificationsIcon style={{ transform: 'scale(0.8)' }} /><RestoreIcon style={{ transform: 'scale(0.8)' }} /></span>
        </div>
        <div>
          <Card md={12} xl={12} lg={12} xs={12} >
            <div style={{ backgroundColor: '#E8E8E8', border: '1px solid #E8E8E8', padding: '10px', color: '#707070' }}>
              <h5 >
                Overall Report
              </h5>
            </div>
            <TableComponent id="publicTable"
              cols={this.state.cols} rows={rows}>
            </TableComponent>
          </Card>
        </div>

      </div>
    )
  }
}
export default GovernmentDashboardTable;