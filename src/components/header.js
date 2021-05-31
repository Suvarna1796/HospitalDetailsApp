import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

var title;
class HeaderComponent extends React.Component {
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
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default HeaderComponent;