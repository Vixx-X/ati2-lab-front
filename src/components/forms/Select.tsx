import { Field } from './Field';

interface SelectProps extends Props {
  placeholder?: string;
  choices: { value: string; text: any }[];
  noPlaceholder?: boolean;
}

export const Select = ({
  choices,
  placeholder,
  noPlaceholder,
  name,
  ...props
}: SelectProps) => {
  return (
    <Field as="select" name={name} {...props}>
      <>
        {!noPlaceholder && (
          <option disabled>{placeholder ?? '--Seleccionar--'}</option>
        )}
        {choices?.map(({ value, text }: any, index: number) => (
          <option value={value} key={index}>
            {text}
          </option>
        ))}
      </>
    </Field>
  );
};

export default Select;
