const FormRow = ({ labelText, type, placeholder }) => {
  return (
    <>
      <form action="">
        <div className="border border-1 border-dark-emphasis rounded-3 d-flex align-items-center py-3 inputs-container position-relative">
          <label
            htmlFor=""
            className="d-inline-block position-relative text-light-emphasis"
          >
            {labelText}
          </label>
          <input
            type={type}
            placeholder={placeholder}
            name=""
            id=""
            className="border-0 d-block position-absolute "
          />
        </div>
      </form>
    </>
  );
};
export default FormRow;
