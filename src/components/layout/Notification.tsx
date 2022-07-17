import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
      <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>
  );
}