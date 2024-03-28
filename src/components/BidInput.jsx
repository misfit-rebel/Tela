const BidInput = ({ labelText, placeholder }) => {
  return (
    <>
      <div className="inquiry-form-container d-flex p-4 align-items-center w-100">
        <h6 className="me-5  fw-semibold ">{labelText}</h6>
        <input
          type="tel"
          name=""
          id=""
          className="w-100 ms-2 py-2 px-3 "
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
export default BidInput;
