import logo from "../assets/images/Path_1929.png";
import FormRow from "./FormRow";

const Agentlogin = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-lg-6 position-relative Agent-Login">
            <div className="overlay-wrapper position-absolute h-100 bg-dark w-100 "></div>
            <div>
              <div className=" d-flex container gap-2 logo-container mb-5 pt py-3">
                <img src={logo} alt="" className="z-1 mb-4 " />
                <span className="z-1 ">
                  <h1 className="fw-bold  text-white ">Logo</h1>
                </span>
              </div>
              <div className="  ">
                <div className="centered">
                  <h2 className="fw-semibold text  mb-4">
                    Lorem Ipsum is simply
                  </h2>
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  z-1 bg-white p-5 ">
            <div className="container pt-5">
              <h4 className="mb-5 mt-3 fw-bold text">Sign In</h4>
              <div className="form-inputs d-flex flex-column ">
                <label className="fw-bold">Email</label>
                <FormRow type="text" placeholder="input your email in here" />
                <label className="fw-bold">Password</label>
                <FormRow type="text" placeholder="password here " />
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
                <button className="btn">CONTINUE</button>
              </div>
              <p className="text-center mt-3 log">
                No Account yet?
                <span className="text-decoration-underline fw-semibold">
                  SIGN UP
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agentlogin;
