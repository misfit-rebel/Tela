import FormRow from "./FormRow";

const AgentSignup = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 position-relative Agent-signup">
        <h1 className="fw-bold text-white m-4">Logo</h1>
        <div className="centered mt-5">
                <h2 className="fw-semibold text mt-5 mb-4">Lorem Ipsum is simply</h2>
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              
        </div>
        <div className="col-lg-6">
        <div className="container pt-5">
              <h3 className="mb-5 mt-3 fw-bold text">Sign Up</h3>
              <div className="form-inputs d-flex flex-column ">
                <label className="fw-bold ">Email</label>
                <FormRow type="text" placeholder="input your email in here" />
                <label className="fw-bold">Password</label>
                <FormRow type="text" placeholder="password here " />
                <label className="fw-bold">Confirm Password</label>
                <FormRow type="text" placeholder="Confirm password here " />
              </div>
              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                />
                <label className="form-check-label fw-bold">Remember me</label>
                <span className="float-right fw-bold">Forget Password?</span>
              </div>
              <div className="text-center mt-5">
                <button className="btn fw-bold">Get Started</button>
              </div>
              <p className="text-center mt-3 log">
                Own an Account?
                <span className="text-decoration-underline fw-semibold">
                  JUMP RIGHT IN
                </span>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AgentSignup
