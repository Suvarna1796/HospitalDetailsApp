import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';
import MapDialog from './MapDialog';

const AreaSelector = (props) => {
    const [content, setContent] = useState("");
    const [STName, setSTName] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    return (
        <React.Fragment>
            {show === true ?
                <MapDialog show={show} StateName={STName} closeModal={handleClose} data={props.data}/>
                :
                <MapChart setTooltipContent={setContent} setStateName={setSTName} setShowDistrict={setShow} data={props.data}/>
            }
            <ReactTooltip>{content}</ReactTooltip>
        </React.Fragment>
    );
}

export default AreaSelector;