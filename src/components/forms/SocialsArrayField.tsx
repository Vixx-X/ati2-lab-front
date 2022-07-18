import recursiveGetter from '@utils/recursiveGetter';

import { FieldArray, useFormikContext } from 'formik';

import Field from './Field';

const FieldArr: any = FieldArray;

export const SocialsArrayField = ({ name }: Props) => {
  const { values } = useFormikContext();
  const vals: any = values;
  return (
    <FieldArr
      name={name}
      render={(arrayHelpers: any) => (
        <div>
          {recursiveGetter(vals, name)?.map((_: any, index: number) => (
            <div key={index}>
              <Field name={`${name}[${index}].name`} />
              <Field name={`${name}[${index}].value`} />
              <button
                type="button"
                onClick={() => {
                  console.log('AAAA', index);
                  arrayHelpers.remove(index);
                }}
              >
                -
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => arrayHelpers.push({ name: '', value: '' })}
          >
            +
          </button>
        </div>
      )}
    />
  );
};

export default SocialsArrayField;
