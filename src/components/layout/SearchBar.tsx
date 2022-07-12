import * as React from 'react';

import Form from '@components/forms/Form';
import Field  from '@components/forms/Field';

import { Field as FField, FormikValues } from 'formik';

import DirectionsIcon from '@mui/icons-material/Directions';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';



interface SearchForm {
  searchWord: string;
}

const initValues = {
  searchWord: '',
} as SearchForm;

export default function CustomizedInputBase() {
  const handleChange = (event:any) => {
    console.log('cambie este peo',event);
  };

  const handleSubmit = () => {
    console.log('Envie este peo');
  };

  return (
    <Form initialValues={initValues} onSubmit={handleSubmit}>
      <Paper
        elevation={1}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '0.5em',
          marginBottom: '1em',
          padding: '.75em',
        }}
      >
        <FField name="search" onChange={handleChange} style={{
          color: 'black',
          padding :'.5em',
          borderRadius:'.25em'
        }}>
        </FField>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Form>
  );
}
