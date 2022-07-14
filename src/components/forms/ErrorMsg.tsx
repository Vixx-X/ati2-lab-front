import { ErrorMessage, ErrorMessageProps, useFormikContext } from 'formik';
export const ErrorMsg = ({ name, ...props }: ErrorMessageProps) => {
  const { status } = useFormikContext();
  const statusData = status?.detail; 
  console.log("STATUS EN ERROR MESAGGE", status);
  const Message = ({ error }: any) => {
    return (
      <span className="font-normal my-3 px-3 py-3 text-md text-red-600">
        {error}
      </span>
    );
  };
  return (
    <>
      <ErrorMessage name={name} component={Message} {...props} />
      {statusData?.[name] ? <Message error={statusData?.[name]} /> : null}
    </>
  );
};

export default ErrorMsg;
