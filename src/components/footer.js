import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Modal, ButtonToolbar, ModalBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class FooterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: false,
        });
    }

    componentDidMount() {
        // console.log('this.props.history: ', this.props);
        if (this.props) {
            if (this.props.history) {
                if (this.props.history.location) {
                    if (this.props.history.location.pathname !== '/' || this.props.history.location.pathname !== '/hospitalSignUp' || this.props.history.location.pathname !== '/governmentSignUp' || this.props.history.location.pathname !== '/publicUserSignUp') {
                        var infodata = sessionStorage.getItem('userInfo');
                        console.log('infodata: ', infodata);
                        if (infodata) {
                            this.setState({ modal: false })
                        }
                        else {
                            this.setState({ modal: true })
                        }
                    }
                }
            }
        }
    }
    render() {
        // console.log("footer footer footer footer footer footer footer footer", this.state.modal)
        return (
            <div className="footerClass">
                {(this.props.name === 'login') ?
                    <div className="footer" >
                        <AppBar position="relative" >
                            <Container >
                                <Typography style={{ color: '#7F868D' }} align="right">
                                    Powered By Uoodmaish <img src="./images/fingerPintIcon.png" alt=" " className="styleIcon" width={30} height={30} />
                                </Typography>
                            </Container>
                        </AppBar>
                    </div> : <AppBar position="sticky" >
                        <Container >
                            <Typography style={{ color: '#7F868D' }} align="right" >
                                Powered By Uoodmaish <img src="./images/fingerPintIcon.png" alt=" " className="styleIcon" width={30} height={30} />
                            </Typography>
                        </Container>
                    </AppBar>}
                <Modal isOpen={this.state.modal} >
                    <ModalBody></ModalBody>
                    <ModalBody>
                        <div className="d-flex justify-content-center">
                            <p>Please Login to continue</p>
                        </div>
                    </ModalBody>
                    <div className="d-flex justify-content-center" style={{ paddingBottom: '3%' }}>
                        <ButtonToolbar className="modal__footer">
                            <Link to='/'><Button onClick={this.toggle}>OK</Button></Link>
                        </ButtonToolbar>
                    </div>
                </Modal>
            </div>
        )
    }
}