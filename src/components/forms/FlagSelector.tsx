/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import * as React from 'react';

import Image from 'next/image';

import { getCountry } from '@fetches/country';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ReactFlagsSelect from 'react-flags-select';
import useSWR from 'swr';

interface FlagSelectorInterface {
  onSelect(flag: any): any;
  flag?: string;
}
export const FlagSelector: React.FC<FlagSelectorInterface> = ({
  onSelect,
  flag,
}) => {
  const [selected, setSelected] = useState('');

  const { data: country } = useSWR('country', getCountry);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <FormControl className="w-full">
      <InputLabel id="demo-simple-select-label">Selecciona un Pais</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        // label="Age"
        onChange={handleChange}
      >
        { country && country.results.map((country: any) => {
            return (
              <MenuItem
                value={country.iso_3166_1_a2}
                key={country.iso_3166_1_a2}
              >
                <img className="mr-2" width="25" src={country.img} alt="" />
                {country.printable_name}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default FlagSelector;
