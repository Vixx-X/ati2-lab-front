import { useMemo } from 'react';

import recursiveGetter from '@utils/recursiveGetter';

import { ErrorMessage, ErrorMessageProps, useFormikContext } from 'formik';

export const ErrorMsg = ({ name, ...props }: ErrorMessageProps) => {
  const { status } = useFormikContext();
  const errorMessage = useMemo(() => {
    return recursiveGetter(status, name, null);
  }, [status, name]);

  const Message = ({ error }: any) => {
    return (
      <div className="bg-red-600 border border-red-700 w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
        <span>{error}</span>
      </div>
    );
  };
  return (
    <>
      <ErrorMessage name={name} component={Message} {...props} />
      {errorMessage != null ? <Message error={errorMessage} /> : null}
    </>
  );
};

export default ErrorMsg;
