import { useMemo } from 'react';

import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';

const defaultOnChange = (callback: Function) => {
  return callback;
};

export const Field = ({
  children,
  onChangeCallback,
  name,
  ...props
}: Props) => {
  if (!onChangeCallback) onChangeCallback = defaultOnChange;

  const { values, setFieldValue, status } = useFormikContext();
  const vals: any = values;

  const handleChange = (e: any) => {
    const value = e.target.value;
    setFieldValue(name, value);
  };

  const hasError = useMemo(
    () => status?.[props.name] /* || errors?.[props.name]*/,
    [status, props.name /*, errors*/]
  );

  return (
    <TextField
      onChange={onChangeCallback(handleChange)}
      value={vals[name]}
      error={hasError}
      {...props}
    >
      {children}
    </TextField>
  );
};

export default Field;
