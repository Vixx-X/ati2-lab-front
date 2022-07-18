import Image from 'next/image';

import { getCountry } from '@fetches/country';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useFormikContext } from 'formik';
import useSWR from 'swr';

interface FlagSelectorInterface {
  name: string;
}

export const FlagSelector = ({ name }: FlagSelectorInterface) => {
  const { values, setFieldValue } = useFormikContext();
  const vals: any = values;

  const { data: country } = useSWR('country', getCountry);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setFieldValue(name, value);
  };

  return (
    <FormControl className="w-full">
      <InputLabel>Selecciona un Pais</InputLabel>
      <Select value={vals[name]} onChange={handleChange}>
        {country &&
          country.results.map((country: any) => {
            return (
              <MenuItem
                value={country.iso_3166_1_a2}
                key={country.iso_3166_1_a2}
              >
                <div className="mr-2 w-8 h-full">
                  <Image
                    width="25"
                    height="13"
                    objectFit="contain"
                    src={country.img}
                    alt={country.iso_3166_1_a2}
                  />
                </div>
                {country.printable_name}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default FlagSelector;
