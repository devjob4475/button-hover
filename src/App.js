import { Button } from '@mui/material';
import React from 'react';

function App() {
  return (
    <div>
      <Button sx={{transition:'transform 0.3s ease','&:hover': {transform: 'scale(1.2)',},}}>Hover</Button>
    </div>
  );
}

export default App;
