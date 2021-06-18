import React from 'react';
import AreaSelector from './AreaSelector';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div style={{ paddingTop: '10%' }}>
          <AreaSelector />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
