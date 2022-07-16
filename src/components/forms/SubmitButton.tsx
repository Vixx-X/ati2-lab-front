export const SubmitButton = ({children}:any) => {
  return (
    <button autoFocus className="ml-3 rounded border-2 p-1 px-3 border-[#598299] text-[#78ccfa]" type="submit">
        {children}
    </button>
  );
};
export default SubmitButton;
