import logo from "../assets/images/Path_1929.png";
import FormRow from "./FormRow";

const ProfileStep1 = () => {
  return (
    <main className="profile-step1 position-relative">
      <div className="overlay-wrapper position-absolute h-100 bg-dark w-100 "></div>
      <div className="ms-5 d-flex  gap-2 logo-container mb-5 pt">
        <img src={logo} alt="" className="z-1 mb-4" />
        <span className="z-1">
          <h1 className="fw-bold text-white">Logo</h1>
        </span>
      </div>

      <section className="container">
        <div className="row">
          <div className="col-lg-6 text-white z-1">
            <h1 className="fw-bold">Building the Future...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
              sed do eiusmod tempor incididunt ut labore et <br /> dolore magna
              aliqua.{" "}
            </p>
          </div>
          <div className="col-lg-6 z-1">
            <div className="container form-container bg-white p-4 mb-5 rounded-4" >
              <h6>LET'S GET YOU STARTED</h6>
              <h4 className="mb-5 mt-3">Add Contact Person Info</h4>
              <div className="form-inputs d-flex flex-column ">
                <FormRow
                  labelText="Industry Name"
                  type="text"
                  placeholder="Johnson Doe"
                />
                <FormRow
                  labelText="Product Type"
                  type="text"
                  placeholder="Select Product Type"
                />
                <FormRow
                  labelText="Email"
                  type="email"
                  placeholder="johnsondoe@nomail.com"
                />
                <FormRow
                  labelText="Password"
                  type="password"
                  placeholder="Set password"
                />
              </div>
              <div className="text-center mt-5">
                <button className="btn get-started-btn">GET STARTED</button>
              </div>
              <div className="position-relative text-center mt-4 ">
                <p className="fw-semibold z-2 bg-white position-relative d-inline-block px-2">
                  or login with{" "}
                </p>
                <hr className="position-absolute top-0 left-0 w-100 " />
              </div>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <span className="text-decoration-underline fw-semibold">
                  LOGIN HERE
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ProfileStep1;
