import * as React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Buttons({
  endIcon,
  startIcon,
  onclick,
  children,
}: any) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onclick}
      >
        {children}
      </Button>
    </Stack>
  );
}
