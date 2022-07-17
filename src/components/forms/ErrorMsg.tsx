import { ErrorMessage, ErrorMessageProps, useFormikContext } from 'formik';
import { useState } from 'react';
export const ErrorMsg = ({ name, ...props }: ErrorMessageProps) => {
  const { status } = useFormikContext();
  const statusData = status?.detail; 
  // console.log("STATUS EN ERROR MESAGGE", status);
  const nestedArray = name.split('.');
  const [nested, setNested] = useState<boolean>((nestedArray[1])? true : false) 
  let nameF = name.replaceAll(".", "?.");
  const errorMessage = eval(`statusData?.${nameF}`)
  console.log("aaaa", `statusData?.${nameF}`, errorMessage)

  const Message = ({ error }: any) => {
    return (
      <div className="bg-red-600 border border-red-700 w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
        {console.log("a e", error)}
        {error.map((element: string, index: number) => (
            <span key={index}>{element}</span>
          ))}
      </div>
    );
  };
  return (
    <>
      {/* <ErrorMessage name={name} component={Message} {...props} /> */}
      {errorMessage ? <Message error={errorMessage} /> : null}
    </>
  );
};

export default ErrorMsg;
