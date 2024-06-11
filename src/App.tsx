import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { AppContainer, CounterContainer } from './App.styles';

const App = () => {
  const [counter, setcounter] = useState(0)
  return (
    <AppContainer>
      <Typography>Something awesome is coming...</Typography>
      <CounterContainer>
        <Typography>{counter}</Typography>
        <Stack direction='row'>
          <Button onClick={() => setcounter(prev => prev + 1)} >+1</Button>
          <Button onClick={() => setcounter(prev => prev - 1)} disabled={!counter}>-1</Button>
        </Stack>
      </CounterContainer>
    </AppContainer>
  )
}

export default App
