import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';
import ReactTooltip from 'react-tooltip';
import StateChart from './StateChart';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        color:'#111',
        boxShadow:'none'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    dialog: {
        backgroundColor:'rgba(0, 0, 0, 0.0)'
    }
    
}));

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const MapDialog = props => {
    // class Map
    const classes = useStyles();
    const [contentD, setContentD] = useState("");
    const [setDTName] = useState("");
    return (
        // <Dialog TransitionComponent={Transition} open={props.show} onClose={props.closeModal} BackdropProps={{ style: { backgroundColor: "transparent" } }}  PaperProps={{style: {backgroundColor: 'transparent',boxShadow: 'none',}, }}>
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start"  onClick={props.closeModal} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                        <Typography variant="h6" className={classes.title}>
                           {props.StateName}
                        </Typography>
                </Toolbar>
            </AppBar>
            <CssBaseline />
            <div >
                <Container maxWidth="md" >
                    <StateChart setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} />
                    <ReactTooltip>{contentD}</ReactTooltip>
                </Container>
            </div>
            </div>
        // {/* </Dialog> */}
    )
};

export default MapDialog;
