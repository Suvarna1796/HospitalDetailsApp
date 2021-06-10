import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default class FooterComponent extends React.Component {

    render() {
        return (
            <div className="footerClass">
                {(this.props.name === 'login') ?
                    <div className="footer" >
                        <AppBar position="relative" >
                            <Container >
                                <Typography style={{ color: '#7F868D' }}  align="right">
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
            </div>
        )
    }
}