import useTranslate from '@hooks/useTranslate';

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
  const t = useTranslate();
  return (
    <Field as="select" name={name} {...props}>
      <>
        {!noPlaceholder && (
          <option disabled>{placeholder ?? `--${t('Select')}--`}</option>
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
