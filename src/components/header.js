import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SearchBar from "material-ui-search-bar";

var title;
class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <FingerprintIcon />
                            {/* <img src="./images/headerIcon.jpeg" alt=" " className="styleIcon" style={{ }}/> */}

                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            {this.props.title}
                        </Typography>

                        <div style={{ flexGrow: 1 }}> </div>
                        {this.props.search === 'pateintId' ?
                            <div>
                                <SearchBar placeholder="enter patient's id"
                                    value={this.state.value} style={{ color: '#FFFFFF', borderRadius: '25px' }}
                                    onChange={(newValue) => this.setState({ value: newValue })}
                                /></div> : this.props.search === 'pateintName' ? <SearchBar placeholder="enter patient's name"
                                    value={this.state.value} style={{ color: '#FFFFFF', borderRadius: '25px' }}
                                    onChange={(newValue) => this.setState({ value: newValue })}
                                /> : ''}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default HeaderComponent;