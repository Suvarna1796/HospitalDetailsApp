import React from 'react';
import AreaSelector from './AreaSelector';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const App = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div style={{ paddingTop: '10%' }}>
          <AreaSelector data={props.data}/>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
