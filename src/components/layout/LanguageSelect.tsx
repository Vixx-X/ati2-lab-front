import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function LanguageSelect() {
  const [language, setLanguage] = React.useState('es');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          input={<OutlinedInput />}
        >
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
  );
}