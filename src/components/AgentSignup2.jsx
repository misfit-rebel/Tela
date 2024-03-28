import FormRow from "./FormRow";

const AgentSignup2 = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 position-relative Agent-signup2">
        <h1 className="fw-bold text-white m-4">Logo</h1>
        <div className="centered mt-5">
                <h2 className="fw-semibold text mt-5 mb-4">Lorem Ipsum is simply</h2>
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              
        </div>
        <div className="col-lg-6">
        <div className="container pt-5">
              <h3 className="mb-5 mt-3 fw-bold text">Add Personal Info</h3>
              <div className="form-inputs d-flex flex-column ">
                <label className="fw-bold ">Name</label>
                <FormRow type="text" placeholder="Input your Name" />
                <label className="fw-bold">Contact Number</label>
                <FormRow type="text" placeholder="Input your Contact Number" />
                <label className="fw-bold">Qualification</label>
                <FormRow type="text" placeholder="Input your Qualification" />
              </div>
              
              <div className="text-center mt-5 mb-5">
                <button className="btn fw-bold mb-5 ">Submit</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AgentSignup2
